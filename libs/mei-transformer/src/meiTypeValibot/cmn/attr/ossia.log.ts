import * as v from "valibot";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ossia.log.html
 */
export const AttrOssiaLogSchema = v.object({
	// No attributes in MEI schema
});

export type AttrOssiaLogData = v.InferOutput<typeof AttrOssiaLogSchema>;
