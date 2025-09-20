import * as v from "valibot";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.strophicus.log.html
 */
export const AttrStrophicusLogSchema = v.object({
	// No attributes in MEI schema
});

export type AttrStrophicusLogData = v.InferOutput<
	typeof AttrStrophicusLogSchema
>;
