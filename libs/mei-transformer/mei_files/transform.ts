import {
	mkdirSync,
	readFileSync,
	readdirSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import { basename, extname, join } from "node:path";
import { meiXmlToJson } from "../src/meiToJSON";

// Directory containing this script (and the XML files)
const dir = __dirname;
const resultDir = join(dir, "result");

rmSync(resultDir, { recursive: true, force: true });
mkdirSync(resultDir);

// Get all .xml files in the current directory
const files = readdirSync(dir).filter(
	(file) => extname(file).toLowerCase() === ".xml",
);

for (const file of files) {
	try {
		const xmlPath = join(dir, file);
		const xmlContent = readFileSync(xmlPath, "utf-8");
		const json = meiXmlToJson(xmlContent);
		const jsonPath = join(resultDir, basename(file, ".xml") + ".json");
		writeFileSync(jsonPath, JSON.stringify(json, null, 2), "utf-8");
		console.log(`Converted ${file} -> result/${basename(file, ".xml")}.json`);
	} catch (err) {
		console.error(`Error processing ${file}:`, err);
	}
}
