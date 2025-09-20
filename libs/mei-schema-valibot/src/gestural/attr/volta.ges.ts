import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.volta.ges.html
 */
export const AttrVoltaGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrVoltaGesData = v.InferOutput<typeof AttrVoltaGesSchema>;
