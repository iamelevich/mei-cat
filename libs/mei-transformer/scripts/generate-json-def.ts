import { mkdir, readdir, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

const MEI_TYPE_VALIBOT_DIR = join(__dirname, "..", "src", "meiTypeValibot");

const OUTPUT_DIR = join(__dirname, "components");

/**
 * Information about components in an MEI module
 */
interface ComponentInfo {
	/** List of MEI element names in the module (e.g., note, measure) */
	elements: string[];
	/** List of macro names in the module (e.g., phraseChild, durGes) */
	macros: string[];
	/** List of attribute class names in the module (e.g., common, typed) */
	attributes: string[];
	/** List of model class names in the module (e.g., measureLike, eventLike) */
	models: string[];
}

/**
 * Type of MEI component:
 * - element: An MEI element (e.g., note, measure)
 * - macro: A reusable content model (e.g., macro.phraseChild)
 * - attribute: An attribute class (e.g., att.common)
 * - model: A model class defining element relationships (e.g., model.measureLike)
 */
type ComponentType = "element" | "macro" | "attribute" | "model";

/**
 * Information about the content model of an MEI element or macro
 */
interface ContentData {
	/** Name of the referenced component */
	name: string;
	/** Description of the referenced component */
	description: string;
	/** URL to the component's documentation */
	url: string;
	/** Cardinality relationship type:
	 * - required: Exactly one instance required
	 * - optional: Zero or one instance allowed
	 * - requiredZeroOrMany: One or more instances required
	 * - optionalZeroOrMany: Zero or more instances allowed
	 */
	relationType:
		| "required"
		| "optional"
		| "requiredZeroOrMany"
		| "optionalZeroOrMany";
}

/**
 * Information about a member of a model class
 */
interface MemberData {
	/** Name of the member component */
	name: string;
	/** Description of the member component */
	description: string;
	/** URL to the member's documentation */
	url: string;
}

/**
 * Information about an attribute definition
 */
interface AttributeData {
	/** Name of the attribute */
	name: string;
	/** Description of the attribute's purpose */
	description: string;
	/** Whether the attribute is required */
	isRequired: boolean;
	/** Data type of the attribute value (e.g., string, number, boolean) */
	valueType: string;
}

/**
 * Complete information about an MEI component (element, macro, attribute class, or model class)
 */
interface ComponentData {
	/** Name of the component */
	name: string;
	/** Type of the component (element, macro, attribute, or model) */
	type: ComponentType;
	/** URL to the component's documentation */
	url: string;
	/** Description of the component extracted from XML schema */
	description: string;
	/** For elements and macros: what they can contain */
	content?: ContentData[];
	/** For models: list of members in the model class */
	members?: MemberData[];
	/** For elements: model.* and/or att.* class references */
	classes?: string[];
	/** For elements: direct attribute definitions */
	attributes?: AttributeData[];
}

/**
 * Get all files in a directory recursively
 */
async function getAllFiles(
	dir: string,
	baseDir: string = dir,
): Promise<string[]> {
	const files: string[] = [];
	try {
		const entries = await readdir(dir, { withFileTypes: true });

		for (const entry of entries) {
			const fullPath = join(dir, entry.name);
			const relativePath = relative(baseDir, fullPath);

			if (entry.isDirectory()) {
				const subFiles = await getAllFiles(fullPath, baseDir);
				files.push(...subFiles);
			} else if (
				entry.isFile() &&
				entry.name.endsWith(".ts") &&
				entry.name !== "index.ts"
			) {
				files.push(relativePath);
			}
		}
	} catch (error) {
		console.warn(`Warning: Could not read directory ${dir}: ${error}`);
	}

	return files.sort();
}

/**
 * Categorize files by type
 */
function categorizeFiles(files: string[]): ComponentInfo {
	const components: ComponentInfo = {
		elements: [],
		macros: [],
		attributes: [],
		models: [],
	};

	for (const file of files) {
		const parts = file.split("/");
		const fileName = parts[parts.length - 1]?.replace(".ts", "") || "";

		if (parts.includes("macro")) {
			components.macros.push(fileName);
		} else if (parts.includes("attr")) {
			components.attributes.push(fileName);
		} else if (parts.includes("model")) {
			components.models.push(fileName);
		} else {
			// Direct files in module root are elements
			components.elements.push(fileName);
		}
	}

	return components;
}

// Cache for XML content per module
const xmlCache = new Map<string, string>();

// Helper function to retry fetch on connection refused
const retryFetch = async (
	url: string,
	options: RequestInit,
	maxRetries = 3,
): Promise<Response> => {
	for (let i = 0; i < maxRetries; i++) {
		try {
			const response = await fetch(url, options);
			return response;
		} catch (error) {
			if (
				error instanceof Error &&
				error.message.includes("ECONNREFUSED") &&
				i < maxRetries - 1
			) {
				// Wait a bit before retrying, increasing delay each time
				await new Promise((resolve) => setTimeout(resolve, 100 * (i + 1)));
				continue;
			}
			throw error;
		}
	}
	throw new Error(`Failed to fetch ${url} after ${maxRetries} retries`);
};

/**
 * Prefetch XML schema for a module
 */
async function prefetchModuleXML(moduleName: string): Promise<void> {
	const urlModuleName = moduleName
		.split(".")
		.map((part, index) =>
			index === 0
				? part
				: part.charAt(0).toUpperCase() + part.slice(1).toLowerCase(),
		)
		.join("");

	const xmlUrl = `https://raw.githubusercontent.com/music-encoding/music-encoding/9d551da8fba699881cac1c8d209b67b8d44d52e6/source/modules/MEI.${urlModuleName}.xml`;
	console.log(`    🔍 Prefetching XML schema: ${xmlUrl}`);

	try {
		const response = await retryFetch(xmlUrl, {
			headers: {
				"User-Agent": "MEI-Transformer/1.0 (https://github.com/your-repo)",
			},
		});

		if (!response.ok) {
			console.warn(`    ⚠️  Failed to fetch ${xmlUrl}: ${response.status}`);
			return;
		}

		const xml = await response.text();
		xmlCache.set(moduleName, xml);
	} catch (error) {
		console.warn(`    ⚠️  Error fetching XML: ${error}`);
	}
}

/**
 * Prefetch XML schemas for all modules
 */
async function prefetchAllModuleXML(moduleNames: string[]): Promise<void> {
	console.log("📥 Prefetching XML schemas...");

	// Use Promise.all but with a concurrency limit to avoid overwhelming the server
	const concurrencyLimit = 5;
	const chunks = [];
	for (let i = 0; i < moduleNames.length; i += concurrencyLimit) {
		chunks.push(moduleNames.slice(i, i + concurrencyLimit));
	}

	for (const chunk of chunks) {
		await Promise.all(chunk.map(prefetchModuleXML));
		// Small delay between chunks
		await new Promise((resolve) => setTimeout(resolve, 100));
	}

	console.log(`✅ Prefetched ${moduleNames.length} XML schemas`);
}

/**
 * Fetch documentation page for a model to extract members
 */
// Removed unused function

function parseMembersFromHTML(html: string): MemberData[] {
	const members: MemberData[] = [];

	// Look for the members_compact section
	const membersMatch = html.match(/id="members_compact"[^>]*>(.*?)<\/div>/s);
	if (!membersMatch) {
		return members;
	}

	const membersSection = membersMatch[1];
	if (!membersSection) {
		return members;
	}

	// Parse each member - look for links with titles
	const memberRegex =
		/<a[^>]*href="[^"]*"[^>]*title="([^"]*)"[^>]*>([^<]+)<\/a>/g;
	let match: RegExpExecArray | null;

	match = memberRegex.exec(membersSection);
	while (match !== null) {
		const title = match[1]?.trim();
		const name = match[2]?.trim();
		const href = membersSection.match(
			new RegExp(`href="([^"]*)"[^>]*>${name}</a>`),
		)?.[1];

		if (name && title) {
			members.push({
				name,
				description: title,
				url: href
					? `https://music-encoding.org/guidelines/v5${href.replace("../", "/")}`
					: "",
			});
		}
		match = memberRegex.exec(membersSection);
	}

	// Also try to find members without title attributes
	const simpleMemberRegex = /<a[^>]*href="[^"]*"[^>]*>([^<]+)<\/a>/g;
	match = simpleMemberRegex.exec(membersSection);
	while (match !== null) {
		const name = match[1]?.trim();
		const href = membersSection
			.match(new RegExp(`href="([^"]*)"[^>]*>${name}</a>`))?.[1]
			?.replace("../", "/");

		// Skip if we already have this member
		if (name && !members.some((m) => m.name === name)) {
			members.push({
				name,
				description: "",
				url: href ? `https://music-encoding.org/guidelines/v5${href}` : "",
			});
		}
		match = simpleMemberRegex.exec(membersSection);
	}

	return members;
}

/**
 * Fetch and parse MEI XML schema to extract Declaration block
 */
async function fetchDeclaration(
	componentName: string,
	type: "element" | "macro" | "attribute" | "model",
	moduleName: string,
): Promise<{ declaration: string; description: string }> {
	try {
		// Get from cache - should be prefetched
		const xml = xmlCache.get(moduleName);
		if (!xml) {
			console.warn(
				`    ⚠️  XML schema not found in cache for module: ${moduleName}`,
			);
			return { declaration: "Declaration not available", description: "" };
		}

		// Parse XML to find Declaration block and description
		const result = parseDeclarationFromXML(
			xml,
			componentName,
			type,
			moduleName,
		);
		return {
			declaration: result.declaration || "Declaration not found",
			description: result.description,
		};
	} catch (error) {
		console.warn(`    ⚠️  Error parsing XML: ${error}`);
		return { declaration: "Declaration not available", description: "" };
	}
}

// removed markdown-focused XML formatting helper

/**
 * Get the closing tag for a component type
 */
function getClosingTag(
	type: "element" | "macro" | "attribute" | "model",
	_componentName: string,
): string {
	switch (type) {
		case "element":
			return "</elementSpec>";
		case "macro":
			return "</macroSpec>";
		case "attribute":
		case "model":
			return "</classSpec>";
	}
}

/**
 * Parse XML to extract Declaration block for a specific component
 */
/**
 * Extract description from XML declaration block
 */
function extractDescription(xml: string): string {
	// Look for desc tag with xml:lang="en" within the declaration
	const descMatch = /<desc\s+xml:lang="en"[^>]*>([\s\S]*?)<\/desc>/i.exec(xml);
	if (descMatch?.[1]) {
		return descMatch[1]
			.trim()
			.replace(/\s+/g, " ") // Normalize whitespace
			.replace(/\n\s*/g, " "); // Clean up newlines
	}

	// If no English description found, try without language specification
	const fallbackMatch = /<desc[^>]*>([\s\S]*?)<\/desc>/i.exec(xml);
	if (fallbackMatch?.[1]) {
		return fallbackMatch[1]
			.trim()
			.replace(/\s+/g, " ") // Normalize whitespace
			.replace(/\n\s*/g, " "); // Clean up newlines
	}

	return "";
}

function parseDeclarationFromXML(
	xml: string,
	componentName: string,
	type: "element" | "macro" | "attribute" | "model",
	moduleName: string,
): { declaration: string | null; description: string } {
	let searchPattern: RegExp;
	let openingTag: string;

	switch (type) {
		case "element":
			searchPattern = new RegExp(
				`<elementSpec[^>]*ident="${componentName}"[^>]*>([\\s\\S]*?)</elementSpec>`,
				"i",
			);
			openingTag = `<elementSpec ident="${componentName}" module="MEI.${moduleName}">`;
			break;
		case "macro":
			searchPattern = new RegExp(
				`<macroSpec[^>]*ident="macro\\.${componentName}"[^>]*>([\\s\\S]*?)</macroSpec>`,
				"i",
			);
			openingTag = `<macroSpec ident="macro.${componentName}" module="MEI.${moduleName}">`;
			break;
		case "attribute":
			searchPattern = new RegExp(
				`<classSpec[^>]*ident="att\\.${componentName}"[^>]*type="atts"[^>]*>([\\s\\S]*?)</classSpec>`,
				"i",
			);
			openingTag = `<classSpec ident="att.${componentName}" module="MEI.${moduleName}" type="atts">`;
			break;
		case "model":
			searchPattern = new RegExp(
				`<classSpec[^>]*ident="model\\.${componentName}"[^>]*type="model"[^>]*>([\\s\\S]*?)</classSpec>`,
				"i",
			);
			openingTag = `<classSpec ident="model.${componentName}" module="MEI.${moduleName}" type="model">`;
			break;
	}

	const match = xml.match(searchPattern);
	if (!match) {
		console.log(`    ⚠️  Declaration not found for ${type}: ${componentName}`);
		return { declaration: null, description: "" };
	}

	let declaration = match[0]; // Use full match to include opening tag

	// Extract description before cleaning up the declaration
	const description = extractDescription(declaration || "");

	// Clean up the XML declaration
	declaration = (declaration || "")
		.replace(/^\s+|\s+$/g, "") // Trim whitespace
		.replace(/\s+/g, " ") // Normalize whitespace
		.replace(/\n\s*/g, "\n") // Clean up newlines
		.trim();

	// Get the closing tag
	const closingTag = getClosingTag(type, componentName);

	// Return the complete declaration with opening and closing tags, and the description
	return {
		declaration: openingTag + "\n" + (declaration || "") + "\n" + closingTag,
		description,
	};
}

/**
 * Extract classes (model.* and att.*) and attribute names from a declaration block
 */
function extractClassesAndAttributes(declaration: string): {
	classes: string[];
	attributes: AttributeData[];
} {
	const classes = new Set<string>();
	const attributes: AttributeData[] = [];

	// class references via memberOf/@key or classRef/@key
	const classKeyRegex = /\bkey\s*=\s*"(model\.[^"]+|att\.[^"]+)"/gi;
	let match: RegExpExecArray | null = classKeyRegex.exec(declaration);
	while (match) {
		classes.add(match[1] ?? "");
		match = classKeyRegex.exec(declaration);
	}

	// class references via ident in classRef (less common but include)
	const classIdentRegex =
		/<classRef[^>]*\bident\s*=\s*"(model\.[^"]+|att\.[^"]+)"/gi;
	match = classIdentRegex.exec(declaration);
	while (match) {
		classes.add(match[1] ?? "");
		match = classIdentRegex.exec(declaration);
	}

	// Extract attribute definitions with details
	const attDefRegex =
		/<attDef[^>]*\bident\s*=\s*"([^"]+)"[^>]*>(.*?)<\/attDef>/gis;
	match = attDefRegex.exec(declaration);
	while (match) {
		const name = match[1] ?? "";
		const attDefContent = match[2] ?? "";

		// Extract description from desc tag
		const descMatch = /<desc[^>]*>(.*?)<\/desc>/i.exec(attDefContent);
		const description = descMatch?.[1]?.trim() || "";

		// Extract usage (required/optional)
		const usageMatch = /<usage[^>]*>(.*?)<\/usage>/i.exec(attDefContent);
		const isRequired =
			usageMatch?.[1]?.toLowerCase().includes("required") || false;

		// Extract value type from valDesc or datatype
		const valDescMatch = /<valDesc[^>]*>(.*?)<\/valDesc>/i.exec(attDefContent);
		const datatypeMatch = /<datatype[^>]*>(.*?)<\/datatype>/i.exec(
			attDefContent,
		);

		// Clean up value type
		const rawType =
			valDescMatch?.[1]?.trim() || datatypeMatch?.[1]?.trim() || "string";
		let valueType = rawType;

		// Clean up rng references
		if (rawType.includes("<rng:ref")) {
			const refMatch = /name="data\.([^"]+)"/i.exec(rawType);
			valueType = refMatch?.[1]?.toLowerCase() || "string";
		} else if (rawType.includes("<rng:data")) {
			const typeMatch = /type="([^"]+)"/i.exec(rawType);
			valueType = typeMatch?.[1]?.toLowerCase() || "string";
		} else if (rawType.includes("<rng:")) {
			// Other rng types
			const typeMatch = /<rng:(\w+)/i.exec(rawType);
			valueType = typeMatch?.[1]?.toLowerCase() || "string";
		}

		// Clean up common patterns
		valueType = valueType
			.replace(/^data\./i, "")
			.replace(/^xsd?:/i, "")
			.toLowerCase();

		if (name) {
			attributes.push({
				name,
				description,
				isRequired,
				valueType,
			});
		}
		match = attDefRegex.exec(declaration);
	}

	return {
		classes: Array.from(classes).filter(Boolean).sort(),
		attributes: attributes.sort((a, b) => a.name.localeCompare(b.name)),
	};
}

/**
 * Build JSON data for a single component
 */
async function generateComponentData(
	componentName: string,
	type: ComponentType,
	moduleName: string,
): Promise<ComponentData> {
	const baseUrl = "https://music-encoding.org/guidelines/v5";
	let url: string;

	switch (type) {
		case "element":
			url = `${baseUrl}/elements/${componentName}.html`;
			break;
		case "macro":
			url = `${baseUrl}/macro-groups/macro.${componentName}.html`;
			break;
		case "attribute":
			url = `${baseUrl}/attribute-classes/att.${componentName}.html`;
			break;
		case "model":
			url = `${baseUrl}/model-classes/model.${componentName}.html`;
			break;
	}

	const { declaration, description } = await fetchDeclaration(
		componentName,
		type,
		moduleName,
	);
	const { classes, attributes } = extractClassesAndAttributes(
		declaration || "",
	);

	// Fetch HTML documentation with retry
	const response = await retryFetch(url, {
		headers: {
			"User-Agent": "MEI-Transformer/1.0 (https://github.com/your-repo)",
		},
	});

	const html = await response.text();

	// For elements and macros, get content
	if (type === "element" || type === "macro") {
		// Extract content from XML declaration
		const contentMatch = /<content[^>]*>(.*?)<\/content>/s.exec(declaration);
		const content: ContentData[] = [];

		if (contentMatch?.[1]) {
			const contentSection = contentMatch[1];
			// Helper function to determine the most restrictive cardinality
			function getMostRestrictiveCardinality(
				a:
					| "required"
					| "optional"
					| "requiredZeroOrMany"
					| "optionalZeroOrMany",
				b:
					| "required"
					| "optional"
					| "requiredZeroOrMany"
					| "optionalZeroOrMany",
			): "required" | "optional" | "requiredZeroOrMany" | "optionalZeroOrMany" {
				// If either is a ZeroOrMany type, use that
				if (a.endsWith("ZeroOrMany") || b.endsWith("ZeroOrMany")) {
					// If both are ZeroOrMany types, prefer required over optional
					if (a.endsWith("ZeroOrMany") && b.endsWith("ZeroOrMany")) {
						return a.startsWith("required") ? a : b;
					}
					// Otherwise use the ZeroOrMany one
					return a.endsWith("ZeroOrMany") ? a : b;
				}
				// If neither is ZeroOrMany, prefer required over optional
				return a === "required" ? a : b;
			}

			// Map to store unique content items
			const contentMap = new Map<
				string,
				{
					name: string;
					description: string;
					url: string;
					relationType:
						| "required"
						| "optional"
						| "requiredZeroOrMany"
						| "optionalZeroOrMany";
				}
			>();

			// Helper function to process rng:ref elements
			function processRef(
				ref: string,
				parentCardinality:
					| "required"
					| "optional"
					| "requiredZeroOrMany"
					| "optionalZeroOrMany" = "optional",
			): void {
				const refMatch = /<rng:ref\s+name="([^"]+)"/.exec(ref);
				if (!refMatch?.[1]) return;

				const name = refMatch[1];
				let url = "";
				let description = "";

				if (name.startsWith("macro.")) {
					url = `https://music-encoding.org/guidelines/v5/macro-groups/${name}.html`;
					description = `Reference to ${name}`;
				} else if (name.startsWith("model.")) {
					url = `https://music-encoding.org/guidelines/v5/model-classes/${name}.html`;
					description = `Reference to model class ${name}`;
				} else {
					url = `https://music-encoding.org/guidelines/v5/elements/${name}.html`;
					description = `Reference to element ${name}`;
				}

				// Update or add to contentMap
				const existing = contentMap.get(name);
				if (existing) {
					existing.relationType = getMostRestrictiveCardinality(
						existing.relationType,
						parentCardinality,
					);
				} else {
					contentMap.set(name, {
						name,
						description,
						url,
						relationType: parentCardinality,
					});
				}
			}

			// Helper function to determine cardinality
			function getCardinality(
				section: string,
			): "required" | "optional" | "requiredZeroOrMany" | "optionalZeroOrMany" {
				if (section.includes("<rng:oneOrMore")) return "requiredZeroOrMany";
				if (section.includes("<rng:zeroOrMore")) return "optionalZeroOrMany";
				if (section.includes('minOccurs="1"')) return "required";
				return "optional";
			}

			// Helper function to process a section recursively
			function processSection(
				section: string,
				parentCardinality:
					| "required"
					| "optional"
					| "requiredZeroOrMany"
					| "optionalZeroOrMany" = "optional",
			): void {
				// Process direct references first
				const refRegex = /<rng:ref[^>]*name="[^"]+"[^>]*>/g;
				let match = section.match(refRegex);
				if (match) {
					for (const ref of match) {
						processRef(ref, parentCardinality);
					}
				}

				// Extract inner content from containers
				const containers = [
					{
						tag: "group",
						regex: /<rng:group[^>]*>(.*?)<\/rng:group>/gs,
						cardinality: (content: string) => getCardinality(content),
					},
					{
						tag: "choice",
						regex: /<rng:choice[^>]*>(.*?)<\/rng:choice>/gs,
						cardinality: (content: string) => getCardinality(content),
					},
					{
						tag: "zeroOrMore",
						regex: /<rng:zeroOrMore[^>]*>(.*?)<\/rng:zeroOrMore>/gs,
						cardinality: () => "optionalZeroOrMany" as const,
					},
					{
						tag: "oneOrMore",
						regex: /<rng:oneOrMore[^>]*>(.*?)<\/rng:oneOrMore>/gs,
						cardinality: () => "requiredZeroOrMany" as const,
					},
				];

				for (const container of containers) {
					match = section.match(container.regex);
					if (match) {
						for (const item of match) {
							// Extract inner content
							const innerMatch = new RegExp(
								`<rng:${container.tag}[^>]*>(.*?)</rng:${container.tag}>`,
								"s",
							).exec(item);
							if (innerMatch?.[1]) {
								const cardinality = container.cardinality(item);
								// Only process inner content if it contains references
								if (innerMatch[1].includes("<rng:ref")) {
									processSection(innerMatch[1], cardinality);
								}
							}
						}
					}
				}
			}

			// Process the entire content section
			processSection(contentSection);

			// Convert contentMap to array and sort by name
			content.push(
				...Array.from(contentMap.values()).sort((a, b) =>
					a.name.localeCompare(b.name),
				),
			);
		}

		return {
			name: componentName,
			type,
			url,
			description,
			content,
			...(type === "element" ? { classes, attributes } : {}),
		};
	}

	// For models, get members
	if (type === "model") {
		const members = parseMembersFromHTML(html);
		return {
			name: componentName,
			type,
			url,
			description,
			members,
			classes,
			attributes,
		};
	}

	// For other types
	return {
		name: componentName,
		type,
		url,
		description,
		classes,
		attributes,
	};
}

/**
 * Generate a component block with name, filename, URL, and declaration
 */
// no longer generating markdown blocks

/**
 * Generate markdown for a single module
 */
async function writeModuleJSON(
	moduleName: string,
	components: ComponentInfo,
): Promise<void> {
	const moduleDir = join(OUTPUT_DIR, moduleName);
	await mkdir(moduleDir, { recursive: true });

	const urlModuleName = moduleName
		.split(".")
		.map((part, index) =>
			index === 0
				? part
				: part.charAt(0).toUpperCase() + part.slice(1).toLowerCase(),
		)
		.join("");

	// Module info
	const moduleInfo = {
		module: `MEI.${moduleName}`,
		generatedAt: new Date().toISOString(),
		docs: `https://music-encoding.org/guidelines/v5/modules/MEI.${moduleName}.html`,
		xml: `https://raw.githubusercontent.com/music-encoding/music-encoding/9d551da8fba699881cac1c8d209b67b8d44d52e6/source/modules/MEI.${urlModuleName}.xml`,
		counts: {
			elements: components.elements.length,
			macros: components.macros.length,
			attributes: components.attributes.length,
			models: components.models.length,
		},
		components: {
			elements: components.elements,
			macros: components.macros.map((name) => `macro.${name}`),
			attributes: components.attributes.map((name) => `att.${name}`),
			models: components.models.map((name) => `model.${name}`),
		},
	};
	await writeFile(
		join(moduleDir, "module.json"),
		JSON.stringify(moduleInfo, null, 2),
		"utf-8",
	);

	// Helper function to process components in batches
	async function processComponentBatch(
		components: string[],
		type: ComponentType,
		moduleName: string,
		batchSize = 5,
	): Promise<ComponentData[]> {
		const results: ComponentData[] = [];
		for (let i = 0; i < components.length; i += batchSize) {
			const batch = components.slice(i, i + batchSize);
			const batchResults = await Promise.all(
				batch.map((name) => generateComponentData(name, type, moduleName)),
			);
			results.push(...batchResults);
			// Small delay between batches
			if (i + batchSize < components.length) {
				await new Promise((resolve) => setTimeout(resolve, 100));
			}
		}
		return results;
	}

	// Build component data arrays with concurrent processing
	const [elements, macros, attributes, models] = await Promise.all([
		processComponentBatch(components.elements, "element", moduleName),
		processComponentBatch(components.macros, "macro", moduleName),
		processComponentBatch(components.attributes, "attribute", moduleName),
		processComponentBatch(components.models, "model", moduleName),
	]);

	await Promise.all([
		writeFile(
			join(moduleDir, "elements.json"),
			JSON.stringify(elements, null, 2),
			"utf-8",
		),
		writeFile(
			join(moduleDir, "macros.json"),
			JSON.stringify(macros, null, 2),
			"utf-8",
		),
		writeFile(
			join(moduleDir, "attributes.json"),
			JSON.stringify(attributes, null, 2),
			"utf-8",
		),
		writeFile(
			join(moduleDir, "models.json"),
			JSON.stringify(models, null, 2),
			"utf-8",
		),
	]);
}

/**
 * Main function
 */
async function main(targetModule?: string): Promise<void> {
	console.log("🌳 Generating MEI components tree...");

	try {
		// Get all module directories
		const entries = await readdir(MEI_TYPE_VALIBOT_DIR, {
			withFileTypes: true,
		});
		const moduleDirs = entries
			.filter((entry) => entry.isDirectory())
			.map((entry) => entry.name)
			.sort();

		// Filter to target modules if specified
		const targetModules = targetModule?.split(",") || [];
		const filteredModules =
			targetModules.length > 0
				? moduleDirs.filter((name) => targetModules.includes(name))
				: moduleDirs;

		if (targetModules.length > 0 && filteredModules.length === 0) {
			console.error(
				`❌ No specified modules found: ${targetModules.join(", ")}`,
			);
			process.exit(1);
		}

		if (
			targetModules.length > 0 &&
			filteredModules.length !== targetModules.length
		) {
			const missingModules = targetModules.filter(
				(m) => !filteredModules.includes(m),
			);
			console.warn(`⚠️  Some modules not found: ${missingModules.join(", ")}`);
		}

		console.log(
			targetModules.length > 0
				? `Found modules: ${filteredModules.join(", ")}`
				: `Found ${moduleDirs.length} modules: ${moduleDirs.join(", ")}`,
		);

		const moduleComponents: Record<string, ComponentInfo> = {};

		console.log(
			targetModules.length > 0
				? `🚀 Processing ${filteredModules.length} target modules`
				: `🚀 Processing all ${filteredModules.length} modules`,
		);

		// Prefetch XML schemas (only for needed modules)
		await prefetchAllModuleXML(filteredModules);

		// Process each module
		for (const moduleName of filteredModules) {
			console.log(`📁 Processing module: ${moduleName}`);

			const moduleDir = join(MEI_TYPE_VALIBOT_DIR, moduleName);
			const files = await getAllFiles(moduleDir);
			const components = categorizeFiles(files);

			moduleComponents[moduleName] = components;

			const total =
				components.elements.length +
				components.macros.length +
				components.attributes.length +
				components.models.length;
			console.log(
				`  ✓ Found ${total} components (${components.elements.length} elements, ${components.macros.length} macros, ${components.attributes.length} attributes, ${components.models.length} models)`,
			);
		}

		// Create output directory
		await mkdir(OUTPUT_DIR, { recursive: true });

		// Generate JSON folder per module
		for (const moduleName of filteredModules) {
			const components = moduleComponents[moduleName];
			if (!components) continue;

			console.log(`📝 Generating JSON for module: ${moduleName}`);
			await writeModuleJSON(moduleName, components);
		}

		console.log(`\n✅ Tree generated successfully!`);
		console.log(`📁 Output directory: ${OUTPUT_DIR}`);
		console.log(
			`📄 Generated ${filteredModules.length} module folders with JSON`,
		);

		// Print summary
		const totalComponents = filteredModules.reduce((sum, moduleName) => {
			const comp = moduleComponents[moduleName];
			if (!comp) return sum;
			return (
				sum +
				comp.elements.length +
				comp.macros.length +
				comp.attributes.length +
				comp.models.length
			);
		}, 0);

		console.log(`\n📊 Summary:`);
		console.log(`- Modules: ${filteredModules.length}`);
		console.log(`- Total Components: ${totalComponents}`);
		console.log(
			`- Elements: ${filteredModules.reduce((sum, moduleName) => {
				const comp = moduleComponents[moduleName];
				return comp ? sum + comp.elements.length : sum;
			}, 0)}`,
		);
		console.log(
			`- Macros: ${filteredModules.reduce((sum, moduleName) => {
				const comp = moduleComponents[moduleName];
				return comp ? sum + comp.macros.length : sum;
			}, 0)}`,
		);
		console.log(
			`- Attributes: ${filteredModules.reduce((sum, moduleName) => {
				const comp = moduleComponents[moduleName];
				return comp ? sum + comp.attributes.length : sum;
			}, 0)}`,
		);
		console.log(
			`- Models: ${filteredModules.reduce((sum, moduleName) => {
				const comp = moduleComponents[moduleName];
				return comp ? sum + comp.models.length : sum;
			}, 0)}`,
		);
	} catch (error) {
		console.error("❌ Error generating tree:", error);
		process.exit(1);
	}
}

// Run the script
if (import.meta.main) {
	// Get target modules from command line args if provided
	const targetModules = process.argv.slice(2);
	main(targetModules.length > 0 ? targetModules.join(",") : undefined).catch(
		console.error,
	);
}
