import { Value } from "@sinclair/typebox/value";
import { XMLParser } from "fast-xml-parser";
import {
	type MEIBiblio,
	type MEIBiblioManifestation,
	ManifestationSchema,
	type PhysLoc,
	PhysLocSchema,
} from "./schema";

/**
 * Transforms MEI XML string into normalized JSON matching MEIBiblioSchema.
 * @param xml - MEI XML as string
 * @returns Normalized MEI bibliographic/manifestation JSON
 */
export function meiXmlToJson(xml: string): MEIBiblio {
	const parser = new XMLParser({
		ignoreAttributes: ["xml:id"],
		attributeNamePrefix: "",
	});
	const doc = parser.parse(xml);

	return doc;
}
