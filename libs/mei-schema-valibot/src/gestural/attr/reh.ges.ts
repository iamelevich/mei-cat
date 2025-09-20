import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.reh.ges.html
 */
export const AttrRehGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrRehGesData = v.InferOutput<typeof AttrRehGesSchema>;
