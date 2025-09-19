import * as v from "valibot";

/**
 * Permits any XML elements except those from the MEI or SVG namespace.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/macro.anyXML.html
 */
export const MacroAnyXMLSchema = v.record(v.string(), v.unknown());

export type MacroAnyXMLData = v.InferOutput<typeof MacroAnyXMLSchema>;
