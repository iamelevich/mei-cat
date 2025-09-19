import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.episema.anl.html
 */
export const AttrEpisemaAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrEpisemaAnlData = v.InferOutput<typeof AttrEpisemaAnlSchema>;
