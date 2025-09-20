import * as v from "valibot";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mNum.log.html
 */
export const AttrMNumLogSchema = v.object({
	// No attributes in MEI schema
});

export type AttrMNumLogData = v.InferOutput<typeof AttrMNumLogSchema>;
