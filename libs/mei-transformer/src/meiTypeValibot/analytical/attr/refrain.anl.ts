import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.refrain.anl.html
 */
export const AttrRefrainAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrRefrainAnlData = v.InferOutput<typeof AttrRefrainAnlSchema>;
