import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.volta.anl.html
 */
export const AttrVoltaAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrVoltaAnlData = v.InferOutput<typeof AttrVoltaAnlSchema>;
