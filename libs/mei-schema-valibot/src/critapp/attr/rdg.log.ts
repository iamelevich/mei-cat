import * as v from "valibot";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rdg.log.html
 */
export const AttrRdgLogSchema = v.object({
	// No attributes in MEI schema
});

export type AttrRdgLogData = v.InferOutput<typeof AttrRdgLogSchema>;
