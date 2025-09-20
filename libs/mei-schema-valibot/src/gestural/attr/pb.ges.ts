import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pb.ges.html
 */
export const AttrPbGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrPbGesData = v.InferOutput<typeof AttrPbGesSchema>;
