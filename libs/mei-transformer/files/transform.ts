import {
	mkdirSync,
	readFileSync,
	readdirSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import { basename, extname, join, relative } from "node:path";
import { meiXmlTo51, meiXmlToJson } from "../src/meiToJSON";

const inputs: [string, string][] = [
	[
		`${__dirname}/../sample-encodings/MEI_3.0/Header/Minimal_header/Example_MinimalHeader.mei`,
		"MEI_3.0_Example_MinimalHeader",
	],
	[
		`${__dirname}/../sample-encodings/MEI_3.0/Header/FRBR/Header_FRBR.mei`,
		"MEI_3.0_Header_FRBR",
	],
	[
		`${__dirname}/../sample-encodings/MEI_4.0/Header/Minimal_header/Example_MinimalHeader.mei`,
		"MEI_4.0_Example_MinimalHeader",
	],
	[
		`${__dirname}/../sample-encodings/MEI_4.0/Header/FRBR/Header_FRBR.mei`,
		"MEI_4.0_Header_FRBR",
	],
	[
		`${__dirname}/../sample-encodings/MEI_5.0/Header/Minimal_header/Example_MinimalHeader.mei`,
		"MEI_5.0_Example_MinimalHeader",
	],
	[
		`${__dirname}/../sample-encodings/MEI_5.0/Header/FRBR/Header_FRBR.mei`,
		"MEI_5.0_Header_FRBR",
	],
	[
		`${__dirname}/../sample-encodings/MEI_5.1/Header/Minimal_header/Example_MinimalHeader.mei`,
		"MEI_5.1_Example_MinimalHeader",
	],
	[
		`${__dirname}/../sample-encodings/MEI_5.1/Header/FRBR/Header_FRBR.mei`,
		"MEI_5.1_Header_FRBR",
	],
	[
		`${__dirname}/../sample-encodings/MEI_5.1/Music/Complete_examples/Aguado_Walzer_G-major.mei`,
		"MEI_5.1_Aguado_Walzer_G-major",
	],
	[
		`${__dirname}/../sample-encodings/MEI_5.1/Music/Complete_examples/Bach-JS_BrandenburgConcert_No4_I_BWV1049.mei`,
		"MEI_5.1_Bach-JS_BrandenburgConcert_No4_I_BWV1049",
	],
	[
		`${__dirname}/../sample-encodings/MEI_5.1/Music/Complete_examples/Bach-JS_Hilf_Herr_Jesu_BWV344.mei`,
		"MEI_5.1_Bach-JS_Hilf_Herr_Jesu_BWV344",
	],
];

// Directory containing this script (and the XML files)
const dir = `${__dirname}/input`;
const resultDir = `${__dirname}/result`;

rmSync(resultDir, { recursive: true, force: true });
mkdirSync(resultDir);

// Get all .xml files in the current directory
const files: [string, string][] = readdirSync(dir)
	.filter((file) => extname(file).toLowerCase() === ".xml")
	.map((file) => [join(dir, file), file]);

files.push(...inputs);

for (const [path, newName] of files) {
	const relativePath = relative(`${__dirname}/../`, path);
	try {
		const xmlPath = path;
		const xmlContent = readFileSync(xmlPath, "utf-8");
		const mei51 = await meiXmlTo51(xmlContent);
		writeFileSync(join(resultDir, newName + ".mei51.xml"), mei51, "utf-8");
		const json = meiXmlToJson(mei51);
		const jsonPath = join(resultDir, newName + ".json");
		writeFileSync(jsonPath, JSON.stringify(json, null, 2), "utf-8");
		console.log(`Converted ${relativePath} -> result/${newName}.json`);
	} catch (err) {
		console.error(`Error processing ${relativePath}:`, err);
	}
}
