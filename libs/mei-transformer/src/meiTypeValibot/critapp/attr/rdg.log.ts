import * as v from "valibot";

/**
 * Attributes for rdg.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rdg.log.html
 */
export const AttrRdgLogSchema = v.object({
	// No attributes in schema
});

export type AttrRdgLogData = v.InferOutput<typeof AttrRdgLogSchema>;
