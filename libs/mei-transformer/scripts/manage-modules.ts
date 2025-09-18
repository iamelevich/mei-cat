#!/usr/bin/env bun

import { promises as fs } from "fs";
import path from "path";

// Configuration
const MEI_TYPE_VALIBOT_DIR = path.join(__dirname, "../src/meiTypeValibot");
const BASE_MODULE_URL = "https://music-encoding.org/guidelines/v5/modules/";

// Known MEI modules (excluding the main MEI module)
const KNOWN_MEI_MODULES = [
	"MEI.analytical",
	"MEI.cmn",
	"MEI.cmnOrnaments",
	"MEI.corpus",
	"MEI.critapp",
	"MEI.drama",
	"MEI.edittrans",
	"MEI.externalsymbols",
	"MEI.facsimile",
	"MEI.figtable",
	"MEI.fingering",
	"MEI.frbr",
	"MEI.genetic",
	"MEI.gestural",
	"MEI.harmony",
	"MEI.header",
	"MEI.lyrics",
	"MEI.mensural",
	"MEI.midi",
	"MEI.msDesc",
	"MEI.namesdates",
	"MEI.neumes",
	"MEI.performance",
	"MEI.ptrref",
	"MEI.shared",
	"MEI.stringtab",
	"MEI.text",
	"MEI.usersymbols",
	"MEI.visual",
];

interface ModuleInfo {
	name: string;
	elements: string[];
	macros: string[];
	attributes: string[];
	models: string[];
}

/**
 * Get existing subfolders in meiTypeValibot directory
 */
async function getExistingSubfolders(): Promise<string[]> {
	try {
		const entries = await fs.readdir(MEI_TYPE_VALIBOT_DIR, {
			withFileTypes: true,
		});
		return entries
			.filter((entry) => entry.isDirectory())
			.map((entry) => entry.name);
	} catch (error) {
		console.error(`Error reading meiTypeValibot directory: ${error}`);
		return [];
	}
}

/**
 * Create directory if it doesn't exist
 */
async function ensureDirectoryExists(dirPath: string): Promise<void> {
	try {
		await fs.mkdir(dirPath, { recursive: true });
		console.log(`✓ Directory created/verified: ${dirPath}`);
	} catch (error) {
		console.error(`Error creating directory ${dirPath}: ${error}`);
	}
}

/**
 * Fetch and parse module page to extract elements, macros, and attributes
 */
async function fetchModuleInfo(moduleName: string): Promise<ModuleInfo> {
	const moduleUrl = `${BASE_MODULE_URL}${moduleName}.html`;

	try {
		console.log(`Fetching module info for ${moduleName}...`);
		const response = await fetch(moduleUrl);

		if (!response.ok) {
			console.warn(
				`⚠ Failed to fetch ${moduleUrl}: ${response.status} ${response.statusText}`,
			);
			return {
				name: moduleName,
				elements: [],
				macros: [],
				attributes: [],
				models: [],
			};
		}

		const html = await response.text();

		// Extract elements, macros, attributes, and models from HTML
		const elements = extractItemsFromHtml(html, "element");
		const macros = extractItemsFromHtml(html, "macro");
		const attributes = extractItemsFromHtml(html, "attribute");
		const models = extractItemsFromHtml(html, "model");

		console.log(
			`  Found ${elements.length} elements, ${macros.length} macros, ${attributes.length} attributes, ${models.length} models`,
		);

		return {
			name: moduleName,
			elements,
			macros,
			attributes,
			models,
		};
	} catch (error) {
		console.error(`Error fetching module info for ${moduleName}: ${error}`);
		return {
			name: moduleName,
			elements: [],
			macros: [],
			attributes: [],
			models: [],
		};
	}
}

/**
 * Extract items from HTML content based on type
 */
function extractItemsFromHtml(
	html: string,
	type: "element" | "macro" | "attribute" | "model",
): string[] {
	const items: string[] = [];

	try {
		// Look for patterns in the HTML that indicate elements, macros, or attributes
		let pattern: RegExp;
		switch (type) {
			case "element":
				// Look for element definitions with class link_odd_elementSpec
				pattern =
					/<a[^>]*class="[^"]*link_odd_elementSpec[^"]*"[^>]*href="[^"]*elements\/([^"]+)\.html[^"]*"[^>]*>([^<]+)<\/a>/g;
				break;
			case "macro":
				// Look for macro definitions with class link_odd_macroGroup
				pattern =
					/<a[^>]*class="[^"]*link_odd_macroGroup[^"]*"[^>]*href="[^"]*macro-groups\/([^"]+)\.html[^"]*"[^>]*>([^<]+)<\/a>/g;
				break;
			case "attribute":
				// Look for attribute definitions with class link_odd_attClass
				pattern =
					/<a[^>]*class="[^"]*link_odd_attClass[^"]*"[^>]*href="[^"]*attribute-classes\/([^"]+)\.html[^"]*"[^>]*>([^<]+)<\/a>/g;
				break;
			case "model":
				// Look for model definitions with class link_odd_modelClass
				pattern =
					/<a[^>]*class="[^"]*link_odd_modelClass[^"]*"[^>]*href="[^"]*model-classes\/([^"]+)\.html[^"]*"[^>]*>([^<]+)<\/a>/g;
				break;
		}

		let match: RegExpExecArray | null = pattern.exec(html);
		while (match !== null) {
			const itemName = match[2]?.trim();
			if (itemName && !items.includes(itemName)) {
				items.push(itemName);
			}
			match = pattern.exec(html);
		}
	} catch (error) {
		console.warn(`Warning: Error parsing ${type}s from HTML: ${error}`);
	}

	return items;
}

/**
 * Check if a file exists in the module directory
 */
async function fileExists(filePath: string): Promise<boolean> {
	try {
		await fs.access(filePath);
		return true;
	} catch {
		return false;
	}
}

/**
 * Check for extra files that shouldn't exist in the module
 */
async function checkForExtraFiles(
	moduleDir: string,
	moduleInfo: ModuleInfo,
): Promise<string[]> {
	const extraFiles: string[] = [];

	try {
		// Get all files in the module directory
		const entries = await fs.readdir(moduleDir, { withFileTypes: true });

		// Create sets of expected files for easy lookup
		const expectedElements = new Set(
			moduleInfo.elements.map((el) => `${el}.ts`),
		);
		const expectedMacros = new Set(
			moduleInfo.macros.map((macro) => macro.replace(/^macro\./, "")),
		);
		const expectedAttributes = new Set(
			moduleInfo.attributes.map((attr) => attr.replace(/^att\./, "")),
		);
		const expectedModels = new Set(
			moduleInfo.models.map((model) => model.replace(/^model\./, "")),
		);

		for (const entry of entries) {
			if (entry.isDirectory()) {
				// Check subdirectories
				const subDirPath = path.join(moduleDir, entry.name);
				const subEntries = await fs.readdir(subDirPath, {
					withFileTypes: true,
				});

				for (const subEntry of subEntries) {
					if (subEntry.isFile() && subEntry.name.endsWith(".ts")) {
						const fileName = subEntry.name.replace(".ts", "");
						let isExpected = false;

						if (entry.name === "macro" && expectedMacros.has(fileName)) {
							isExpected = true;
						} else if (
							entry.name === "attr" &&
							expectedAttributes.has(fileName)
						) {
							isExpected = true;
						} else if (entry.name === "model" && expectedModels.has(fileName)) {
							isExpected = true;
						}

						if (!isExpected) {
							extraFiles.push(`${entry.name}/${subEntry.name}`);
						}
					}
				}
			} else if (entry.isFile() && entry.name.endsWith(".ts")) {
				// Check direct files (elements)
				const fileName = entry.name.replace(".ts", "");

				// Skip index.ts and other common files
				if (fileName === "index" || fileName === "common") {
					continue;
				}

				if (!expectedElements.has(entry.name)) {
					extraFiles.push(entry.name);
				}
			}
		}
	} catch (error) {
		console.warn(
			`Warning: Error checking for extra files in ${moduleDir}: ${error}`,
		);
	}

	return extraFiles;
}

/**
 * Delete extra files that are not part of the MEI specification
 */
async function deleteExtraFiles(
	moduleDir: string,
	extraFiles: string[],
): Promise<void> {
	for (const filePath of extraFiles) {
		try {
			const fullPath = path.join(moduleDir, filePath);
			await fs.unlink(fullPath);
			console.log(`      🗑️  Deleted: ${filePath}`);
		} catch (error) {
			console.warn(`      ⚠️  Failed to delete ${filePath}: ${error}`);
		}
	}
}

/**
 * Create missing files with appropriate templates
 */
async function createMissingFiles(
	moduleDir: string,
	missingItems: {
		elements: string[];
		macros: string[];
		attributes: string[];
		models: string[];
	},
): Promise<void> {
	// Create missing element files
	for (const element of missingItems.elements) {
		const filePath = path.join(moduleDir, `${element}.ts`);
		await createElementFile(filePath, element);
	}

	// Create missing macro files
	for (const macro of missingItems.macros) {
		const fileName = macro.replace(/^macro\./, "");
		const macroDir = path.join(moduleDir, "macro");
		await fs.mkdir(macroDir, { recursive: true });
		const filePath = path.join(macroDir, `${fileName}.ts`);
		await createMacroFile(filePath, macro);
	}

	// Create missing attribute files
	for (const attribute of missingItems.attributes) {
		const fileName = attribute.replace(/^att\./, "");
		const attrDir = path.join(moduleDir, "attr");
		await fs.mkdir(attrDir, { recursive: true });
		const filePath = path.join(attrDir, `${fileName}.ts`);
		await createAttributeFile(filePath, attribute);
	}

	// Create missing model files
	for (const model of missingItems.models) {
		const fileName = model.replace(/^model\./, "");
		const modelDir = path.join(moduleDir, "model");
		await fs.mkdir(modelDir, { recursive: true });
		const filePath = path.join(modelDir, `${fileName}.ts`);
		await createModelFile(filePath, model);
	}
}

/**
 * Create an element file template
 */
async function createElementFile(
	filePath: string,
	elementName: string,
): Promise<void> {
	const content = `import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * ${elementName} element.
 * @see https://music-encoding.org/guidelines/v5/elements/${elementName}.html
 */
export const ${capitalizeFirst(elementName)}Schema = AnythingObjectSchema; // TODO: implement element

export type ${capitalizeFirst(elementName)}Data = v.InferOutput<typeof ${capitalizeFirst(elementName)}Schema>;
`;
	await fs.writeFile(filePath, content, "utf8");
	console.log(`      📄 Created element: ${elementName}.ts`);
}

/**
 * Create a macro file template
 */
async function createMacroFile(
	filePath: string,
	macroName: string,
): Promise<void> {
	const baseName = macroName.replace(/^macro\./, "");
	const content = `import * as v from "valibot";

/**
 * Macro group for ${baseName}.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/${macroName}.html
 */
export const Macro${capitalizeWords(baseName)}Schema = v.object({
  // TODO: Add ${baseName} elements
});

export type Macro${capitalizeWords(baseName)}Data = v.InferOutput<typeof Macro${capitalizeWords(baseName)}Schema>;
`;
	await fs.writeFile(filePath, content, "utf8");
	console.log(`      📄 Created macro: ${baseName}.ts`);
}

/**
 * Create an attribute file template
 */
async function createAttributeFile(
	filePath: string,
	attributeName: string,
): Promise<void> {
	const baseName = attributeName.replace(/^att\./, "");
	const content = `import * as v from "valibot";

/**
 * Attributes for ${baseName}.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/${attributeName}.html
 */
export const Attr${capitalizeWords(baseName)}Schema = v.object({
  // TODO: Add ${baseName} attributes
});

export type Attr${capitalizeWords(baseName)}Data = v.InferOutput<typeof Attr${capitalizeWords(baseName)}Schema>;
`;
	await fs.writeFile(filePath, content, "utf8");
	console.log(`      📄 Created attribute: ${baseName}.ts`);
}

/**
 * Create a model file template
 */
async function createModelFile(
	filePath: string,
	modelName: string,
): Promise<void> {
	const baseName = modelName.replace(/^model\./, "");
	const content = `import * as v from "valibot";

/**
 * Groups elements that represent ${baseName.toLowerCase()} parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/${modelName}.html
 */
export const ${capitalizeWords(baseName)}Schema = v.object({
  // TODO: Add ${baseName.toLowerCase()} elements
});

export type ${capitalizeWords(baseName)}Data = v.InferOutput<typeof ${capitalizeWords(baseName)}Schema>;
`;
	await fs.writeFile(filePath, content, "utf8");
	console.log(`      📄 Created model: ${baseName}.ts`);
}

/**
 * Capitalize the first letter of a string
 */
function capitalizeFirst(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Capitalize the first letter of each word (handles camelCase conversion)
 */
function capitalizeWords(str: string): string {
	return str
		.replace(/[._]/g, " ") // Replace dots and underscores with spaces
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join("");
}

/**
 * Update the index.ts file for a module with all available exports
 */
async function updateIndexFile(
	moduleDir: string,
	moduleInfo: ModuleInfo,
): Promise<void> {
	try {
		const indexPath = path.join(moduleDir, "index.ts");
		const exports: string[] = [];

		// Add element exports
		for (const element of moduleInfo.elements) {
			const elementPath = `./${element}`;
			exports.push(`export * from "${elementPath}";`);
		}

		// Add macro exports
		for (const macro of moduleInfo.macros) {
			const fileName = macro.replace(/^macro\./, "");
			const macroPath = `./macro/${fileName}`;
			exports.push(`export * from "${macroPath}";`);
		}

		// Add attribute exports
		for (const attribute of moduleInfo.attributes) {
			const fileName = attribute.replace(/^att\./, "");
			const attrPath = `./attr/${fileName}`;
			exports.push(`export * from "${attrPath}";`);
		}

		// Add model exports
		for (const model of moduleInfo.models) {
			const fileName = model.replace(/^model\./, "");
			const modelPath = `./model/${fileName}`;
			exports.push(`export * from "${modelPath}";`);
		}

		// Add common export if it exists
		const commonExists = await fileExists(path.join(moduleDir, "common.ts"));
		if (commonExists) {
			exports.push(`export * from "./common";`);
		}

		// Sort exports alphabetically
		exports.sort();

		// Generate the index.ts content with organized sections
		const content = generateIndexContent(exports);

		// Write the file
		await fs.writeFile(indexPath, content, "utf8");
		console.log(`      📝 Updated index.ts with ${exports.length} exports`);
	} catch (error) {
		console.warn(`      ⚠️  Failed to update index.ts: ${error}`);
	}
}

/**
 * Generate organized index.ts content with sections
 */
function generateIndexContent(exports: string[]): string {
	const elements: string[] = [];
	const macros: string[] = [];
	const attributes: string[] = [];
	const models: string[] = [];

	// Categorize exports based on their paths
	for (const exportLine of exports) {
		if (exportLine.includes("./macro/")) {
			macros.push(exportLine);
		} else if (exportLine.includes("./attr/")) {
			attributes.push(exportLine);
		} else if (exportLine.includes("./model/")) {
			models.push(exportLine);
		} else {
			elements.push(exportLine);
		}
	}

	// Build the content with sections
	const sections: string[] = [];

	if (elements.length > 0) {
		sections.push("// Elements");
		sections.push(...elements);
		sections.push("");
	}

	if (macros.length > 0) {
		sections.push("// Macros");
		sections.push(...macros);
		sections.push("");
	}

	if (attributes.length > 0) {
		sections.push("// Attributes");
		sections.push(...attributes);
		sections.push("");
	}

	if (models.length > 0) {
		sections.push("// Models");
		sections.push(...models);
	}

	// Remove trailing empty line
	if (sections.length > 0 && sections[sections.length - 1] === "") {
		sections.pop();
	}

	return sections.join("\n");
}

/**
 * Process a single module
 */
async function processModule(moduleName: string): Promise<void> {
	const moduleDir = path.join(
		MEI_TYPE_VALIBOT_DIR,
		moduleName.toLowerCase().replace("mei.", ""),
	);

	// Ensure directory exists
	await ensureDirectoryExists(moduleDir);

	// Fetch module information
	const moduleInfo = await fetchModuleInfo(moduleName);

	// Check for missing files
	const missingItems = {
		elements: [] as string[],
		macros: [] as string[],
		attributes: [] as string[],
		models: [] as string[],
	};

	// Check elements (direct files: element.ts)
	for (const element of moduleInfo.elements) {
		const filePath = path.join(moduleDir, `${element}.ts`);
		const exists = await fileExists(filePath);
		if (!exists) {
			missingItems.elements.push(element);
		}
	}

	// Check macros (subdirectory: macro/macro.ts)
	for (const macro of moduleInfo.macros) {
		const macroDir = path.join(moduleDir, "macro");
		// Remove 'macro.' prefix from filename
		const fileName = macro.replace(/^macro\./, "");
		const filePath = path.join(macroDir, `${fileName}.ts`);
		const exists = await fileExists(filePath);
		if (!exists) {
			missingItems.macros.push(macro);
		}
	}

	// Check attributes (subdirectory: attr/attr.ts)
	for (const attribute of moduleInfo.attributes) {
		const attrDir = path.join(moduleDir, "attr");
		// Remove 'att.' prefix from filename
		const fileName = attribute.replace(/^att\./, "");
		const filePath = path.join(attrDir, `${fileName}.ts`);
		const exists = await fileExists(filePath);
		if (!exists) {
			missingItems.attributes.push(attribute);
		}
	}

	// Check models (subdirectory: model/model.ts)
	for (const model of moduleInfo.models) {
		const modelDir = path.join(moduleDir, "model");
		// Remove 'model.' prefix from filename
		const fileName = model.replace(/^model\./, "");
		const filePath = path.join(modelDir, `${fileName}.ts`);
		const exists = await fileExists(filePath);
		if (!exists) {
			missingItems.models.push(model);
		}
	}

	// Check for extra files that shouldn't exist
	const extraFiles = await checkForExtraFiles(moduleDir, moduleInfo);

	// Output missing items and extra files
	const totalMissing =
		missingItems.elements.length +
		missingItems.macros.length +
		missingItems.attributes.length +
		missingItems.models.length;

	const hasIssues = totalMissing > 0 || extraFiles.length > 0;

	if (hasIssues) {
		console.log(`  ⚠ Issues found for ${moduleName}:`);

		if (totalMissing > 0) {
			console.log(`    Missing ${totalMissing} files:`);
			if (missingItems.elements.length > 0) {
				console.log(`      Elements: ${missingItems.elements.join(", ")}`);
			}
			if (missingItems.macros.length > 0) {
				console.log(`      Macros: ${missingItems.macros.join(", ")}`);
			}
			if (missingItems.attributes.length > 0) {
				console.log(`      Attributes: ${missingItems.attributes.join(", ")}`);
			}
			if (missingItems.models.length > 0) {
				console.log(`      Models: ${missingItems.models.join(", ")}`);
			}
		}

		if (extraFiles.length > 0) {
			console.log(
				`    Extra files (not in MEI spec): ${extraFiles.join(", ")}`,
			);

			// Delete extra files
			await deleteExtraFiles(moduleDir, extraFiles);
		}

		// Create missing files
		await createMissingFiles(moduleDir, missingItems);

		// Update index.ts file
		await updateIndexFile(moduleDir, moduleInfo);
	} else {
		console.log(`  ✓ All files correct for ${moduleName}`);
		// Still update index.ts even if no issues found
		await updateIndexFile(moduleDir, moduleInfo);
	}
}

/**
 * Main function
 */
async function main(): Promise<void> {
	console.log("🚀 Starting MEI module management script...");
	console.log(`📁 Working directory: ${MEI_TYPE_VALIBOT_DIR}`);

	// Get existing subfolders
	const existingFolders = await getExistingSubfolders();
	console.log(`📂 Existing folders: ${existingFolders.join(", ")}`);

	// Process each known MEI module
	for (const moduleName of KNOWN_MEI_MODULES) {
		console.log(`\n📋 Processing module: ${moduleName}`);
		await processModule(moduleName);
	}

	console.log("\n✅ Module management completed!");
	console.log("\nSummary:");
	console.log("- All MEI module directories have been created/verified");
	console.log(
		"- Missing elements, macros, attributes, and models have been identified and created",
	);
	console.log(
		"- Extra files not in MEI specification have been identified and deleted",
	);
	console.log("- index.ts files have been updated with all available exports");
	console.log(
		"- Template files have been generated for missing MEI components",
	);
}

// Run the script
if (import.meta.main) {
	main().catch(console.error);
}
