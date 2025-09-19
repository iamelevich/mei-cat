import fs from "node:fs/promises";
import { join } from "node:path";
import { $ } from "bun";

const COMPONENTS_PATH = join(__dirname, "components");
// const RESULT_DIR_PATH = join(__dirname, "result");
const RESULT_DIR_PATH = join(__dirname, "..", "src", "meiTypeValibot");

interface ModelMember {
	name: string;
	description: string;
	url: string;
}

interface ElementContent {
	name: string;
	description: string;
	url: string;
	relationType: "optional" | "optionalZeroOrMany" | "requiredZeroOrMany";
}

interface ElementDefinition {
	name: string;
	type: string;
	url: string;
	description: string;
	content: ElementContent[];
	classes: string[];
	attributes: Array<{
		name: string;
		description: string;
		isRequired: boolean;
		valueType: string;
	}>;
}

interface MacroContent {
	name: string;
	description: string;
	url: string;
	relationType: "optional" | "optionalZeroOrMany";
}

interface MacroDefinition {
	name: string;
	type: string;
	url: string;
	description: string;
	content: MacroContent[];
}

interface ModelDefinition {
	name: string;
	type: string;
	url: string;
	description: string;
	members: ModelMember[];
	classes: string[];
	attributes: string[];
}

interface ModuleDefinition {
	module: string;
	components: {
		elements: string[];
		macros: string[];
		attributes: string[];
		models: string[];
	};
}

const componentToModuleMap = new Map<string, string>();

function generateAttributeContent(
	attribute: {
		name: string;
		type: string;
		url: string;
		description: string;
		classes: string[];
		attributes: Array<{
			name: string;
			description: string;
			isRequired: boolean;
			valueType: string;
		}>;
	},
	currentModule: string,
): string {
	const attrNameForSchema = attribute.name.replace(/\./g, "_");
	const pascalName = attrNameForSchema
		.split("_")
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join("");
	const schemaName = `Attr${pascalName}Schema`;
	const typeName = `Attr${pascalName}Data`;

	// Generate imports
	const imports = ['import * as v from "valibot";'];

	// Generate class imports
	const classImports = new Map<string, string[]>();
	for (const className of attribute.classes) {
		const path = getImportPath(className, currentModule);
		if (!path) continue;
		const classAttrName = className.replace(/^att\./, "").replace(/\./g, "_");
		const classPascalName = classAttrName
			.split("_")
			.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
			.join("");

		if (!classImports.has(path)) {
			classImports.set(path, []);
		}

		const imports = classImports.get(path);
		if (imports) {
			imports.push(`Attr${classPascalName}Schema`);
		}
	}

	for (const [path, importLine] of classImports.entries()) {
		imports.push(`import { ${importLine.join(", ")} } from "${path}";`);
	}

	// Generate JSDoc comment
	const jsDoc = [
		"/**",
		` * ${attribute.description}.`,
		` * @see ${attribute.url}`,
		" */",
	];

	// Generate schema
	const schemaLines = [`export const ${schemaName} = v.object({`];

	// Add class entries if any
	if (attribute.classes.length > 0) {
		schemaLines.push("  // Inherited attribute classes");
		for (const className of attribute.classes) {
			const classAttrName = className.replace(/^att\./, "").replace(/\./g, "_");
			const classPascalName = classAttrName
				.split("_")
				.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
				.join("");
			schemaLines.push(`  ...Attr${classPascalName}Schema.entries,`);
		}
		if (attribute.attributes.length > 0) {
			schemaLines.push("");
		}
	}

	// Add direct attributes if any
	if (attribute.attributes.length > 0) {
		schemaLines.push("  // Direct attributes");
		for (const attr of attribute.attributes) {
			// Add JSDoc for the attribute
			schemaLines.push("  /**");
			schemaLines.push(`   * ${attr.description}`);
			schemaLines.push("   */");

			// Add the attribute
			const attrLine = `  "@${attr.name}": ${attr.isRequired ? "" : "v.optional("}v.string()${attr.isRequired ? "" : ")"},`;
			schemaLines.push(attrLine);
		}
	}
	// If no attributes and no classes, add comment
	else if (attribute.classes.length === 0) {
		schemaLines.push("  // No attributes in MEI schema");
	}

	schemaLines.push("});");

	// Generate type
	const typeLines = [
		`export type ${typeName} = v.InferOutput<typeof ${schemaName}>;`,
	];

	// Combine all parts
	return [...imports, "", ...jsDoc, ...schemaLines, "", ...typeLines].join(
		"\n",
	);
}

async function generateIndexFile(
	files: string[],
	outputPath: string,
): Promise<void> {
	// Sort files to ensure consistent order
	const sortedFiles = [...files].sort();

	// Generate export statements
	const exports = sortedFiles.map((file) => {
		// Remove .ts extension
		const baseName = file.replace(/\.ts$/, "");
		return `export * from "./${baseName}";`;
	});

	// Write index file
	await fs.writeFile(join(outputPath, "index.ts"), exports.join("\n") + "\n");
}

async function generateMeiJsonFile(resultPath: string): Promise<void> {
	const content = `import * as v from "valibot";
import { MeiSchema } from "./shared";

export const MeiJsonSchema = v.object({
	mei: MeiSchema,
});

export type MeiJsonData = v.InferOutput<typeof MeiJsonSchema>;
`;

	await fs.writeFile(join(resultPath, "meiJson.ts"), content);
	console.log("Generated meiJson.ts");
}

async function generateCommonFile(resultPath: string): Promise<void> {
	const content = `import * as v from "valibot";

/**
 * StandardTag represents either an object with optional #text or a string.
 */
export const StandardTagSchema = v.object({
	"#text": v.optional(v.string()),
});

export type StandardTagData = v.InferOutput<typeof StandardTagSchema>;
`;

	await fs.writeFile(join(resultPath, "common.ts"), content);
	console.log("Generated common.ts");
}

async function generateGlobalIndexFile(resultPath: string): Promise<void> {
	const exports: string[] = [];

	// Add common.ts export first
	const commonPath = join(resultPath, "common.ts");
	try {
		await fs.access(commonPath);
		exports.push(`export * from "./common";`);
		exports.push(`export * from "./meiJson";`);
	} catch {
		// Skip if common.ts doesn't exist
	}

	// Get all module directories
	const modules = await fs.readdir(resultPath);

	for (const module of modules) {
		const modulePath = join(resultPath, module);
		const moduleIndexPath = join(modulePath, "index.ts");

		try {
			// Check if it's a directory and has index.ts
			const stats = await fs.stat(modulePath);
			if (stats.isDirectory()) {
				await fs.access(moduleIndexPath);
				exports.push(`export * from "./${module}";`);
			}
		} catch {
			// Skip if not a directory or no index.ts
		}
	}

	if (exports.length > 0) {
		// Write global index file
		await fs.writeFile(join(resultPath, "index.ts"), exports.join("\n") + "\n");
		console.log("Generated global index.ts");
	}
}

async function generateModuleIndexFile(
	moduleResultPath: string,
): Promise<void> {
	const exports: string[] = [];
	const folders = ["attr", "element", "macro", "model"];

	// Check each folder and add export if it exists and has an index.ts file
	for (const folder of folders) {
		const folderPath = join(moduleResultPath, folder);
		const indexPath = join(folderPath, "index.ts");
		try {
			await fs.access(indexPath);
			exports.push(`export * from "./${folder}";`);
		} catch {
			// Folder doesn't exist or has no index.ts, skip it
		}
	}

	if (exports.length > 0) {
		// Write module index file
		await fs.writeFile(
			join(moduleResultPath, "index.ts"),
			exports.join("\n") + "\n",
		);
		console.log("  Generated module index.ts");
	}
}

async function main() {
	await fillComponentToModuleMap();

	const modules = await fs.readdir(COMPONENTS_PATH);

	// Create result directory if it doesn't exist
	await fs.mkdir(RESULT_DIR_PATH, { recursive: true });

	// Generate common.ts file
	await generateCommonFile(RESULT_DIR_PATH);
	await generateMeiJsonFile(RESULT_DIR_PATH);

	for (const module of modules) {
		if (!(await fs.stat(join(COMPONENTS_PATH, module))).isDirectory()) {
			continue;
		}

		const modulePath = join(COMPONENTS_PATH, module);
		const moduleResultPath = join(RESULT_DIR_PATH, module);

		// Process elements
		const elementsPath = join(modulePath, "elements.json");
		try {
			await fs.access(elementsPath);
			const elementsContent = await fs.readFile(elementsPath, "utf8");
			const elements = JSON.parse(elementsContent) as ElementDefinition[];

			// Only create element directory if we have elements
			if (elements.length > 0) {
				// Create module element directory in result path
				const moduleElementPath = join(moduleResultPath, "element");
				await fs.mkdir(moduleElementPath, { recursive: true });

				console.log(`Processing ${module} - found ${elements.length} elements`);

				// Keep track of generated element files
				const elementFiles: string[] = [];

				// Generate element files
				for (const element of elements) {
					const elementFileName = `${element.name}.ts`;
					const elementFilePath = join(moduleElementPath, elementFileName);

					try {
						// Generate element content
						const elementContent = generateElementContent(element, module);

						// Write element file
						await fs.writeFile(elementFilePath, elementContent);
						console.log(`  Generated ${elementFileName}`);
						elementFiles.push(elementFileName);
					} catch (error) {
						console.error(`  Error generating ${elementFileName}:`, error);
					}
				}

				// Generate index file for elements
				if (elementFiles.length > 0) {
					await generateIndexFile(elementFiles, moduleElementPath);
					console.log(`  Generated element/index.ts`);
				}
			}
		} catch (error) {
			if (
				error instanceof Error &&
				"code" in error &&
				error.code !== "ENOENT"
			) {
				console.error(`Error processing elements for ${module}:`, error);
			}
		}

		// Process macros
		const macrosPath = join(modulePath, "macros.json");
		try {
			await fs.access(macrosPath);
			const macrosContent = await fs.readFile(macrosPath, "utf8");
			const macros = JSON.parse(macrosContent) as MacroDefinition[];

			// Only create macro directory if we have macros
			if (macros.length > 0) {
				// Create module macro directory in result path
				const moduleMacroPath = join(moduleResultPath, "macro");
				await fs.mkdir(moduleMacroPath, { recursive: true });

				console.log(`Processing ${module} - found ${macros.length} macros`);

				// Keep track of generated macro files
				const macroFiles: string[] = [];

				// Generate macro files
				for (const macro of macros) {
					const macroFileName = `${macro.name}.ts`;
					const macroFilePath = join(moduleMacroPath, macroFileName);

					try {
						// Generate macro content
						const macroContent = generateMacroContent(macro, module);

						// Write macro file
						await fs.writeFile(macroFilePath, macroContent);
						console.log(`  Generated ${macroFileName}`);
						macroFiles.push(macroFileName);
					} catch (error) {
						console.error(`  Error generating ${macroFileName}:`, error);
					}
				}

				// Generate index file for macros
				if (macroFiles.length > 0) {
					await generateIndexFile(macroFiles, moduleMacroPath);
					console.log(`  Generated macro/index.ts`);
				}
			}
		} catch (error) {
			if (
				error instanceof Error &&
				"code" in error &&
				error.code !== "ENOENT"
			) {
				console.error(`Error processing macros for ${module}:`, error);
			}
		}

		// Process models
		const modelsPath = join(modulePath, "models.json");
		try {
			await fs.access(modelsPath);
			const modelsContent = await fs.readFile(modelsPath, "utf8");
			const models = JSON.parse(modelsContent) as ModelDefinition[];

			// Only create model directory if we have models
			if (models.length > 0) {
				// Create module model directory in result path
				const moduleModelPath = join(moduleResultPath, "model");
				await fs.mkdir(moduleModelPath, { recursive: true });

				console.log(`Processing ${module} - found ${models.length} models`);

				// Keep track of generated model files
				const modelFiles: string[] = [];

				// Generate model files
				for (const model of models) {
					const modelFileName = `${model.name}.ts`;
					const modelFilePath = join(moduleModelPath, modelFileName);

					try {
						// Generate model content
						const modelContent = generateModelContent(model, module);

						// Write model file
						await fs.writeFile(modelFilePath, modelContent);
						console.log(`  Generated ${modelFileName}`);
						modelFiles.push(modelFileName);
					} catch (error) {
						console.error(`  Error generating ${modelFileName}:`, error);
					}
				}

				// Generate index file for models
				if (modelFiles.length > 0) {
					await generateIndexFile(modelFiles, moduleModelPath);
					console.log(`  Generated model/index.ts`);
				}
			}
		} catch (error) {
			if (
				error instanceof Error &&
				"code" in error &&
				error.code !== "ENOENT"
			) {
				console.error(`Error processing models for ${module}:`, error);
			}
		}

		// Process attributes
		const attributesPath = join(modulePath, "attributes.json");
		try {
			await fs.access(attributesPath);
			const attributesContent = await fs.readFile(attributesPath, "utf8");
			const attributes = JSON.parse(attributesContent) as Array<{
				name: string;
				type: string;
				url: string;
				description: string;
				classes: string[];
				attributes: Array<{
					name: string;
					description: string;
					isRequired: boolean;
					valueType: string;
				}>;
			}>;

			// Only create attributes directory if we have attributes
			if (attributes.length > 0) {
				// Create module attributes directory in result path
				const moduleAttrPath = join(moduleResultPath, "attr");
				await fs.mkdir(moduleAttrPath, { recursive: true });

				console.log(
					`Processing ${module} - found ${attributes.length} attributes`,
				);

				// Keep track of generated attribute files
				const attrFiles: string[] = [];

				// Generate attribute files
				for (const attribute of attributes) {
					const attrName = attribute.name;
					const attrFileName = `${attrName}.ts`;
					const attrFilePath = join(moduleAttrPath, attrFileName);

					try {
						// Generate attribute content
						const attrContent = generateAttributeContent(attribute, module);

						// Write attribute file
						await fs.writeFile(attrFilePath, attrContent);
						console.log(`  Generated ${attrFileName}`);
						attrFiles.push(attrFileName);
					} catch (error) {
						console.error(`  Error generating ${attrFileName}:`, error);
					}
				}

				// Generate index file for attributes
				if (attrFiles.length > 0) {
					await generateIndexFile(attrFiles, moduleAttrPath);
					console.log(`  Generated attr/index.ts`);
				}
			}
		} catch (error) {
			if (
				error instanceof Error &&
				"code" in error &&
				error.code !== "ENOENT"
			) {
				console.error(`Error processing attributes for ${module}:`, error);
			}
		}

		// Generate module index file
		await generateModuleIndexFile(moduleResultPath);
	}
}

function generateElementContent(
	element: ElementDefinition,
	currentModule: string,
): string {
	const elementName = element.name;
	const pascalName = elementName.charAt(0).toUpperCase() + elementName.slice(1);
	const schemaName = `${pascalName}Schema`;
	const baseSchemaName = `${pascalName}BaseSchema`;
	const typeName = `${pascalName}Data`;
	const baseTypeName = `${pascalName}BaseData`;

	// Check if schema has self-reference
	const hasSelfReference = element.content.some(
		(content) => content.name === element.name,
	);

	// Generate imports
	const imports = [
		'import * as v from "valibot";',
		'import { StandardTagSchema } from "../../common";',
	];

	// Generate content imports (separate types and schemas)
	const contentImports = new Map<string, string[]>();

	// Add type imports to contentImports to keep them together with schemas
	const addImport = (path: string, name: string, type = false) => {
		if (!contentImports.has(path)) {
			contentImports.set(path, []);
		}
		const imports = contentImports.get(path);
		if (imports) {
			if (type) {
				// Add type import right after its schema
				const schemaIndex = imports.findIndex(
					(i) => i === name.replace("Data", "Schema"),
				);
				if (schemaIndex !== -1) {
					// If this is a model type, add it at the end of the import list
					if (name.startsWith("Model")) {
						imports.push(`type ${name}`);
					} else {
						imports.splice(schemaIndex + 1, 0, `type ${name}`);
					}
				} else {
					imports.push(`type ${name}`);
				}
			} else {
				imports.push(name);
			}
		}
	};

	// Add class imports
	for (const className of element.classes) {
		const path = getImportPath(className, currentModule);
		if (!path) continue;

		if (className.startsWith("att.")) {
			// For attribute references
			const attrName = className.replace(/^att\./, "").replace(/\./g, "_");
			const attrPascalName = attrName
				.split("_")
				.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
				.join("");

			addImport(path.toString(), `Attr${attrPascalName}Schema`);
		}
	}

	// Add content imports
	for (const content of element.content) {
		if (
			content.name.startsWith("model.") ||
			content.name.startsWith("macro.")
		) {
			// For model/macro references
			const path = getImportPath(content.name, currentModule);
			if (!path) continue;

			const memberName = content.name
				.replace(/^(model\.|macro\.)/, "")
				.replace(/[._-]/g, "_");
			const memberPascalName = memberName
				.split("_")
				.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
				.join("");
			const prefix = content.name.startsWith("model.") ? "Model" : "Macro";

			if (!contentImports.has(path)) {
				contentImports.set(path, []);
			}

			addImport(path, `${prefix}${memberPascalName}Schema`);
			if (hasSelfReference) {
				addImport(path, `${prefix}${memberPascalName}Data`, true);
			}
		} else {
			// For direct element references
			const path = getImportPath(content.name, currentModule);
			if (!path) continue;

			const elementName = content.name;
			const elementPascalName =
				elementName.charAt(0).toUpperCase() + elementName.slice(1);

			// Only skip import if it's the same schema we're currently generating
			if (elementName !== element.name) {
				if (!contentImports.has(path)) {
					contentImports.set(path, []);
				}

				addImport(path, `${elementPascalName}Schema`);
				if (hasSelfReference) {
					addImport(path, `${elementPascalName}Data`, true);
				}
			}
		}
	}

	for (const [path, importLine] of contentImports.entries()) {
		imports.push(`import { ${importLine.join(", ")} } from "${path}";`);
	}

	// Generate schema
	const schemaLines = [];

	// Generate base schema with attributes
	schemaLines.push("/**");
	schemaLines.push(
		" * Base schema with attribute, to simplify types for " + schemaName,
	);
	schemaLines.push(" */");
	schemaLines.push(`const ${baseSchemaName} = v.object({`);
	schemaLines.push(`  ...StandardTagSchema.entries,`);

	// Add attribute entries
	if (element.classes.length > 0) {
		for (const className of element.classes) {
			if (className.startsWith("att.")) {
				// For attribute references
				const attrName = className.replace(/^att\./, "").replace(/\./g, "_");
				const attrPascalName = attrName
					.split("_")
					.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
					.join("");
				schemaLines.push(`  ...Attr${attrPascalName}Schema.entries,`);
			}
		}
	}

	// Add direct attributes if any
	if (element.attributes.length > 0) {
		if (element.classes.length > 0) {
			schemaLines.push("");
		}
		schemaLines.push("  // Direct attributes");
		for (const attr of element.attributes) {
			// Add JSDoc for the attribute
			schemaLines.push("  /**");
			schemaLines.push(`   * ${attr.description}`);
			schemaLines.push("   */");

			// Add the attribute
			const attrLine = `  "@${attr.name}": ${attr.isRequired ? "" : "v.optional("}v.string()${attr.isRequired ? "" : ")"},`;
			schemaLines.push(attrLine);
		}
	}

	schemaLines.push("});");
	schemaLines.push("");

	if (hasSelfReference) {
		schemaLines.push(
			`type ${baseTypeName} = v.InferOutput<typeof ${baseSchemaName}>;`,
		);
		schemaLines.push("");
	}

	// Start schema definition
	schemaLines.push("/**");
	schemaLines.push(` * ${element.description}`);
	schemaLines.push(` * @see ${element.url}`);
	schemaLines.push(" */");
	schemaLines.push(
		`export const ${schemaName}${hasSelfReference ? ": v.GenericSchema<" + typeName + ">" : ""} = v.lazy(() => v.intersect([`,
	);

	// Add base schema
	schemaLines.push(`  ${baseSchemaName},`);

	// Split content into direct elements and model/macro references
	const directElements = [];
	const modelRefs = [];

	for (const content of element.content) {
		if (
			content.name.startsWith("model.") ||
			content.name.startsWith("macro.")
		) {
			// For model/macro references
			const memberName = content.name
				.replace(/^(model\.|macro\.)/, "")
				.replace(/[._-]/g, "_");
			const memberPascalName = memberName
				.split("_")
				.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
				.join("");
			const prefix = content.name.startsWith("model.") ? "Model" : "Macro";
			modelRefs.push(`  ${prefix}${memberPascalName}Schema,`);
		} else {
			// For direct elements
			const elementName = content.name;
			const elementPascalName =
				elementName.charAt(0).toUpperCase() + elementName.slice(1);
			const schemaRef = `${elementPascalName}Schema`;

			// Add JSDoc for the element
			directElements.push("    /**");
			directElements.push(`     * ${content.description}`);
			directElements.push(`     * @see ${content.url}`);
			directElements.push("     */");

			// Add the element based on relationType
			if (content.relationType === "optional") {
				directElements.push(`    ${content.name}: v.optional(${schemaRef}),`);
			} else {
				// optionalZeroOrMany or requiredZeroOrMany
				directElements.push(
					`    ${content.name}: ${content.relationType === "requiredZeroOrMany" ? "" : "v.optional("}v.union([v.array(${schemaRef}), ${schemaRef}])${content.relationType === "requiredZeroOrMany" ? "" : ")"},`,
				);
			}
		}
	}

	// Add direct elements in a single object if any
	if (directElements.length > 0) {
		schemaLines.push("  v.object({");
		schemaLines.push(...directElements);
		schemaLines.push("  }),");
	}

	// Add model/macro references
	schemaLines.push(...modelRefs);

	schemaLines.push("]));");

	// Generate type
	const typeLines = [];

	if (hasSelfReference) {
		// For self-referencing schemas, declare type explicitly
		const directElementTypes = [];
		const modelRefTypes = [];

		// Add direct elements
		for (const content of element.content) {
			if (
				!content.name.startsWith("model.") &&
				!content.name.startsWith("macro.")
			) {
				const elementName = content.name;
				const elementPascalName =
					elementName.charAt(0).toUpperCase() + elementName.slice(1);

				if (content.relationType === "optional") {
					directElementTypes.push(
						`  ${content.name}?: ${elementPascalName}Data;`,
					);
				} else {
					// optionalZeroOrMany or requiredZeroOrMany
					directElementTypes.push(
						`  ${content.name}${content.relationType === "requiredZeroOrMany" ? "" : "?"}: ${elementPascalName}Data | ${elementPascalName}Data[];`,
					);
				}
			} else {
				const path = getImportPath(content.name, currentModule);
				if (!path) continue;

				const memberName = content.name
					.replace(/^(model\.|macro\.)/, "")
					.replace(/[._-]/g, "_");
				const memberPascalName = memberName
					.split("_")
					.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
					.join("");

				const prefix = content.name.startsWith("model.") ? "Model" : "Macro";
				const typeName = `${prefix}${memberPascalName}Data`;
				const schemaName = `${prefix}${memberPascalName}Schema`;
				modelRefTypes.push(typeName);
				addImport(path.toString(), schemaName);
				addImport(path.toString(), typeName, true);
			}
		}

		// Combine all parts
		typeLines.push("export type " + typeName + " = " + baseTypeName + " & {");
		typeLines.push(...directElementTypes);
		if (modelRefTypes.length > 0) {
			typeLines.push("} & ");
			typeLines.push(modelRefTypes.join(" & ") + ";");
		} else {
			typeLines.push("};");
		}
	} else {
		// For non-self-referencing schemas, infer type from schema
		typeLines.push(
			`export type ${typeName} = v.InferOutput<typeof ${schemaName}>;`,
		);
	}

	// Combine all parts
	return [...imports, "", ...schemaLines, "", ...typeLines].join("\n");
}

function generateMacroContent(
	macro: MacroDefinition,
	currentModule: string,
): string {
	const macroName = macro.name;
	const pascalName = macroName
		.split(/[._-]/)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join("");
	const schemaName = `Macro${pascalName}Schema`;
	const typeName = `Macro${pascalName}Data`;

	// Generate imports
	const imports = ['import * as v from "valibot";'];

	// Generate content imports
	const contentImports = new Map<string, string[]>();
	if (macro.name !== "anyXML") {
		for (const content of macro.content) {
			// For model references
			const path = getImportPath(content.name, currentModule);
			if (!path) continue;
			if (
				content.name.startsWith("model.") ||
				content.name.startsWith("macro.")
			) {
				const memberName = content.name.replace(/\./g, "_");
				const memberPascalName = memberName
					.split(/[._-]/g)
					.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
					.join("");

				if (!contentImports.has(path)) {
					contentImports.set(path, []);
				}

				const imports = contentImports.get(path);
				if (imports) {
					imports.push(`type ${memberPascalName}Data`);
					imports.push(`${memberPascalName}Schema`);
				}
			} else {
				const elementName = content.name;
				const elementPascalName =
					elementName.charAt(0).toUpperCase() + elementName.slice(1);

				if (!contentImports.has(path)) {
					contentImports.set(path, []);
				}

				const imports = contentImports.get(path);
				if (imports) {
					imports.push(`type ${elementPascalName}Data`);
					imports.push(`${elementPascalName}Schema`);
				}
			}
		}

		for (const [path, importLine] of contentImports.entries()) {
			imports.push(`import { ${importLine.join(", ")} } from "${path}";`);
		}
	}

	// Generate JSDoc comment
	const jsDoc = [
		"/**",
		` * ${macro.description}`,
		` * @see ${macro.url}`,
		" */",
	];

	// Split content into direct elements and model/macro references
	const directElements = [];
	const modelRefs = [];

	for (const content of macro.content) {
		if (
			content.name.startsWith("model.") ||
			content.name.startsWith("macro.")
		) {
			// For model/macro references
			const memberName = content.name
				.replace(/^(model\.|macro\.)/, "")
				.replace(/\./g, "_");
			const memberPascalName = memberName
				.split("_")
				.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
				.join("");
			const prefix = content.name.startsWith("model.") ? "Model" : "Macro";
			modelRefs.push(`  ${prefix}${memberPascalName}Schema,`);
		} else {
			// For direct elements
			const elementName = content.name;
			const elementPascalName =
				elementName.charAt(0).toUpperCase() + elementName.slice(1);
			const schemaRef = `${elementPascalName}Schema`;

			// Add JSDoc for the element
			directElements.push("  /**");
			directElements.push(`   * ${content.description}`);
			directElements.push(`   * @see ${content.url}`);
			directElements.push("   */");

			// Add the element based on relationType
			if (content.relationType === "optional") {
				directElements.push(`  ${content.name}: v.optional(${schemaRef}),`);
			} else {
				// optionalZeroOrMany
				directElements.push(
					`  ${content.name}: v.optional(v.union([v.array(${schemaRef}), ${schemaRef}])),`,
				);
			}
		}
	}

	// Generate schema
	const schemaLines = [];

	// Special case for anyXML macro
	if (macro.name === "anyXML") {
		schemaLines.push(
			`export const ${schemaName} = v.record(v.string(), v.unknown());`,
		);
	}
	// If we have both direct elements and model refs, use intersect
	else {
		schemaLines.push(
			`export const ${schemaName}: v.GenericSchema<${typeName}> = v.lazy(() => `,
		);
		if (modelRefs.length > 0 && directElements.length > 0) {
			schemaLines.push(`v.intersect([`);
			schemaLines.push(`  v.object({`);
			schemaLines.push(...directElements);
			schemaLines.push(`  }),`);
			schemaLines.push(...modelRefs);
			schemaLines.push(`])`);
		}
		// If we only have direct elements, use object
		else if (directElements.length > 0) {
			schemaLines.push(`v.object({`);
			schemaLines.push(...directElements);
			schemaLines.push(`})`);
		}
		// If we only have model refs, use intersect
		else if (modelRefs.length > 0) {
			schemaLines.push(`v.intersect([`);
			schemaLines.push(...modelRefs);
			schemaLines.push(`])`);
		}
		// If we have no content at all, use empty object
		else {
			schemaLines.push(`v.object({`);
			schemaLines.push("  // No content in MEI schema");
			schemaLines.push(`})`);
		}
		schemaLines.push(");");
	}

	// Generate type
	const typeLines = [];

	// Split content into direct elements and model/macro references for type generation
	const directElementTypes = [];
	const modelRefTypes = [];

	for (const content of macro.content) {
		if (
			content.name.startsWith("model.") ||
			content.name.startsWith("macro.")
		) {
			// For model/macro references
			const memberName = content.name
				.replace(/^(model\.|macro\.)/, "")
				.replace(/\./g, "_");
			const memberPascalName = memberName
				.split("_")
				.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
				.join("");
			const prefix = content.name.startsWith("model.") ? "Model" : "Macro";
			modelRefTypes.push(`${prefix}${memberPascalName}Data`);
		} else {
			// For direct element references
			const elementName = content.name;
			const elementPascalName =
				elementName.charAt(0).toUpperCase() + elementName.slice(1);
			const typeRef = `${elementPascalName}Data`;

			if (content.relationType === "optional") {
				directElementTypes.push(`  ${content.name}?: ${typeRef};`);
			} else {
				// optionalZeroOrMany
				directElementTypes.push(
					`  ${content.name}?: ${typeRef} | ${typeRef}[];`,
				);
			}
		}
	}

	// Start type definition
	typeLines.push(`export type ${typeName} = `);

	// Special case for anyXML macro
	if (macro.name === "anyXML") {
		typeLines.push(`v.InferOutput<typeof ${schemaName}>;`);
	}
	// If we have both direct elements and model refs
	else if (modelRefTypes.length > 0 && directElementTypes.length > 0) {
		typeLines.push("{");
		typeLines.push(...directElementTypes);
		typeLines.push("} & ");
		typeLines.push(modelRefTypes.join(" & "));
		typeLines.push(";");
	}
	// If we only have direct elements
	else if (directElementTypes.length > 0) {
		typeLines.push("{");
		typeLines.push(...directElementTypes);
		typeLines.push("};");
	}
	// If we only have model refs
	else if (modelRefTypes.length > 0) {
		typeLines.push(modelRefTypes.join(" & "));
		typeLines.push(";");
	}
	// If we have no content at all
	else {
		typeLines.push("Record<string, never>;");
	}

	// Combine all parts
	return [...imports, "", ...jsDoc, ...schemaLines, "", ...typeLines].join(
		"\n",
	);
}

function generateModelContent(
	model: ModelDefinition,
	currentModule: string,
): string {
	const pascalName = model.name
		.split(/[._]/)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join("");
	const schemaName = `Model${pascalName}Schema`;
	const typeName = `Model${pascalName}Data`;

	// Generate imports
	const imports = ['import * as v from "valibot";'];

	// Generate member imports. path, import
	const memberImports = new Map<string, string[]>();
	for (const member of model.members) {
		const memberName = member.name
			.split(".")
			.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
			.join("");

		const path = getImportPath(member.name, currentModule);
		if (!path) continue;

		if (!memberImports.has(path)) {
			memberImports.set(path, []);
		}

		const imports = memberImports.get(path);
		if (imports) {
			imports.push(`type ${memberName}Data`);
			imports.push(`${memberName}Schema`);
		}
	}

	for (const [path, importLine] of memberImports.entries()) {
		imports.push(`import { ${importLine.join(", ")} } from "${path}";`);
	}

	// Generate JSDoc comment
	const jsDoc = [
		"/**",
		` * ${model.description}`,
		` * @see ${model.url}`,
		" */",
	];

	// Generate schema
	const schemaLines = [];

	// Split members into direct elements and model references
	const directElements = [];
	const modelRefs = [];

	for (const member of model.members) {
		if (member.name.startsWith("model.")) {
			// For model references, include in intersect
			const memberName = member.name
				.replace(/^model\./, "")
				.replace(/\./g, "_");
			const pascalName = memberName
				.split("_")
				.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
				.join("");
			modelRefs.push(`  Model${pascalName}Schema,`);
		} else {
			// For direct elements, add to base object with JSDoc
			const memberName = member.name.replace(/\./g, "_");
			const pascalName = memberName
				.split("_")
				.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
				.join("");
			directElements.push(
				`    /**`,
				`     * ${member.description}`,
				`     * @see ${member.url}`,
				`     */`,
				`    ${member.name}: v.optional(v.union([v.array(${pascalName}Schema), ${pascalName}Schema])),`,
			);
		}
	}

	// Start schema definition
	schemaLines.push(
		`export const ${schemaName}: v.GenericSchema<${typeName}> = v.lazy(() => `,
	);

	// If we have both direct elements and model refs, use intersect
	if (modelRefs.length > 0 && directElements.length > 0) {
		schemaLines.push(`v.intersect([`);
		schemaLines.push(`  v.object({`);
		schemaLines.push(...directElements);
		schemaLines.push(`  }),`);
		schemaLines.push(...modelRefs);
		schemaLines.push(`])`);
	}
	// If we only have direct elements, use object
	else if (directElements.length > 0) {
		schemaLines.push(`v.object({`);
		schemaLines.push(...directElements);
		schemaLines.push(`})`);
	}
	// If we only have model refs, use intersect
	else if (modelRefs.length > 0) {
		schemaLines.push(`v.intersect([`);
		schemaLines.push(...modelRefs);
		schemaLines.push(`])`);
	}
	// If we have no members at all, use empty object
	else {
		schemaLines.push(`v.object({})`);
	}
	schemaLines.push(");");

	// Generate type
	const typeLines = ["export type " + typeName + " = "];

	// Split members into direct elements and model references for type generation
	const directElementTypes = [];
	const modelRefTypes = [];

	for (const member of model.members) {
		if (member.name.startsWith("model.")) {
			// For model references
			const memberName = member.name
				.replace(/^model\./, "")
				.replace(/\./g, "_");
			const pascalName = memberName
				.split("_")
				.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
				.join("");
			modelRefTypes.push(`Model${pascalName}Data`);
		} else {
			// For direct elements
			const memberName = member.name.replace(/\./g, "_");
			const pascalName = memberName
				.split("_")
				.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
				.join("");
			directElementTypes.push(
				`  ${member.name}?: ${pascalName}Data | ${pascalName}Data[];`,
			);
		}
	}

	// If we have both direct elements and model refs
	if (modelRefTypes.length > 0 && directElementTypes.length > 0) {
		typeLines.push("{");
		typeLines.push(...directElementTypes);
		typeLines.push("} & ");
		typeLines.push(modelRefTypes.join(" & "));
		typeLines.push(";");
	}
	// If we only have direct elements
	else if (directElementTypes.length > 0) {
		typeLines.push("{");
		typeLines.push(...directElementTypes);
		typeLines.push("};");
	}
	// If we only have model refs
	else if (modelRefTypes.length > 0) {
		typeLines.push(modelRefTypes.join(" & "));
		typeLines.push(";");
	}
	// If we have no members at all
	else {
		typeLines.push("Record<string, never>;");
	}

	// Combine all parts
	return [...imports, "", ...jsDoc, ...schemaLines, "", ...typeLines].join(
		"\n",
	);
}

async function fillComponentToModuleMap() {
	const modules = await fs.readdir(COMPONENTS_PATH);

	console.log(`Filling component to module map for ${modules.length} modules`);

	for (const moduleName of modules) {
		if (!(await fs.stat(join(COMPONENTS_PATH, moduleName))).isDirectory()) {
			continue;
		}

		const modulePath = join(COMPONENTS_PATH, moduleName, "module.json");

		const modulesContent = await fs.readFile(modulePath, "utf8");
		const moduleData = JSON.parse(modulesContent) as ModuleDefinition;

		for (const specificComponent of Object.keys(moduleData.components)) {
			for (const component of moduleData.components[
				specificComponent as keyof ModuleDefinition["components"]
			]) {
				componentToModuleMap.set(component, moduleName);
			}
		}
	}

	console.log(
		`Filled component to module map for ${modules.length} modules. Total components: ${componentToModuleMap.size}`,
	);
}

function getImportPath(component: string, currentModule: string) {
	const memberModule = componentToModuleMap.get(component);
	if (!memberModule) return null;

	let path = memberModule === currentModule ? ".." : `../../${memberModule}`;
	if (component.startsWith("att.")) {
		path += `/attr/${component.replace(/^att\./, "")}`;
	} else if (component.startsWith("model.")) {
		path += `/model/${component.replace(/^model\./, "")}`;
	} else if (component.startsWith("macro.")) {
		path += `/macro/${component.replace(/^macro\./, "")}`;
	} else {
		path += `/element/${component}`;
	}

	return path;
}

await main();
console.log("Model generation completed");

// Generate global index file
await generateGlobalIndexFile(RESULT_DIR_PATH);

// Format all generated files
console.log("Biome checking generated files...");
try {
	await $`bunx @biomejs/biome check --write ${RESULT_DIR_PATH}`;
} catch (error: unknown) {
	if (error instanceof $.ShellError) {
		console.error("Error biome checking generated files.");
		console.error("Stdout:\n", error.stdout.toString());
		console.error("Stderr:\n", error.stderr.toString());
		console.error("Exit code:", error.exitCode);
	} else {
		console.error("Error biome checking generated files.", error);
	}
}
console.log("Biome checking completed");
