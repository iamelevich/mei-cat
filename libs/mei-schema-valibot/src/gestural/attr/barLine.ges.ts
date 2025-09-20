import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.barLine.ges.html
 */
export const AttrBarLineGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrBarLineGesData = v.InferOutput<typeof AttrBarLineGesSchema>;
