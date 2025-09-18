import * as v from "valibot";

/**
 * Macro group for any XML content.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/macro.anyXML.html
 */
export const MacroAnyXMLSchema = v.object({
  // TODO: Add any XML content elements
});

export type MacroAnyXMLData = v.InferOutput<typeof MacroAnyXMLSchema>;
