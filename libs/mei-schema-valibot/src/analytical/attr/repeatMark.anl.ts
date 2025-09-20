import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.repeatMark.anl.html
 */
export const AttrRepeatMarkAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrRepeatMarkAnlData = v.InferOutput<
	typeof AttrRepeatMarkAnlSchema
>;
