import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bTrem.anl.html
 */
export const AttrBTremAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrBTremAnlData = v.InferOutput<typeof AttrBTremAnlSchema>;
