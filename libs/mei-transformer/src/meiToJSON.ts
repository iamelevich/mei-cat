import { type MeiJsonData, MeiJsonSchema } from "@mei-cat/mei-schema-valibot";
import { $ } from "bun";
import { XMLParser } from "fast-xml-parser";
import * as v from "valibot";

/**
 * Transforms MEI XML string to JSON without validation.
 * @param xml - MEI XML as string
 * @returns JSON representation of MEI XML
 */
export function meiXmlToJsonWithoutValidation(xml: string) {
	const parser = new XMLParser({
		// ignoreAttributes: (attrName: string, jPath: string) => {
		// 	if (attrName === "xml:id") {
		// 		console.log(`Ignoring attribute ${attrName} in ${jPath}`);
		// 		return true;
		// 	}
		// 	return false;
		// },
		ignoreAttributes: false,
		attributeNamePrefix: "@",
		alwaysCreateTextNode: true,
		parseTagValue: false,
		updateTag: (
			tagName: string,
			_jPath: string,
			attrs: { [k: string]: string },
		) => {
			let newTagName = tagName;
			if (newTagName.startsWith("m:")) {
				// console.log(
				// 	`Updating tag name ${tagName} to ${tagName.replace("m:", "")}`,
				// );
				// No need to keep the xmlns:m attribute
				delete attrs["@xmlns:m"];
				newTagName = newTagName.replace("m:", "");
			}

			// Somehow for some files we have @key.sig attribute instead of @keysig
			if (newTagName === "staffDef" && attrs["@key.sig"]) {
				attrs["@keysig"] = attrs["@key.sig"];
				delete attrs["@key.sig"];
			}

			return newTagName;
		},
	});
	return parser.parse(xml);
}

/**
 * Transforms MEI XML string to JSON.
 * @param xml - MEI XML as string
 * @returns JSON representation of MEI XML
 */
export function meiXmlToJson(xml: string): MeiJsonData {
	const doc = meiXmlToJsonWithoutValidation(xml);

	const parsedMei = v.parse(MeiJsonSchema, doc);

	return parsedMei;
}

/**
 * Extracts MEI XML version from the XML string.
 * @param xml - MEI XML as string
 * @returns MEI XML version
 */
export function getMeiXmlVersion(xml: string) {
	const meiXmlVersion = xml.match(/meiversion="(\d+.*?)"/)?.[1];
	if (!meiXmlVersion) {
		throw new Error("MEI XML version not found");
	}
	return meiXmlVersion;
}

/**
 * Transforms MEI XML string to MEI 5.1 XML string.
 * @param xml - MEI XML as string
 * @returns MEI 5.1 XML as string
 */
export async function meiXmlTo51(
	xml: string,
	version?: string,
): Promise<string> {
	const meiXmlVersion = version ?? getMeiXmlVersion(xml);

	// If the MEI XML version is 5.1, return the XML as is
	if (meiXmlVersion.startsWith("5.1")) {
		return xml;
	}

	// console.log(`MEI XML version: ${meiXmlVersion}`);

	const encodingToolsDir = `${__dirname}/../encoding-tools`;
	let xsltFileName = `${encodingToolsDir}/mei50To51/mei50To51.xsl`;
	if (meiXmlVersion.startsWith("2")) {
		xsltFileName = `${encodingToolsDir}/mei21To30/mei21To30.xsl`;
	} else if (meiXmlVersion.startsWith("3")) {
		xsltFileName = `${encodingToolsDir}/mei30To40/mei30To40.xsl`;
	} else if (meiXmlVersion.startsWith("4")) {
		xsltFileName = `${encodingToolsDir}/mei40To51/mei40To51.xsl`;
	}

	const inputFile = `/tmp/mei-input-${Date.now()}.xml`;
	const outputFile = `/tmp/mei-output-${Date.now()}.xml`;

	await Bun.write(inputFile, xml);
	const _transformOutput =
		await $`bunx xslt3 -xsl:${xsltFileName} -s:${inputFile} -o:${outputFile}`.text();

	// console.log(_transformOutput);

	const output = await Bun.file(outputFile).text();

	// Delete tmp files
	await Bun.file(inputFile).delete();
	await Bun.file(outputFile).delete();

	return output;
}
