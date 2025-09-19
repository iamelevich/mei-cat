import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.part.anl.html
 */
export const AttrPartAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrPartAnlData = v.InferOutput<typeof AttrPartAnlSchema>;
