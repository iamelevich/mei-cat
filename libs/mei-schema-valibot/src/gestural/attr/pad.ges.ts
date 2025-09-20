import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pad.ges.html
 */
export const AttrPadGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrPadGesData = v.InferOutput<typeof AttrPadGesSchema>;
