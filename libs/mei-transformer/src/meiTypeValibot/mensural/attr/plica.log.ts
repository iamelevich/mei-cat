import * as v from "valibot";

/**
 * Logical domain attributes that describe the properties of a plica in the mensural repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.plica.log.html
 */
export const AttrPlicaLogSchema = v.object({
	// No attributes in MEI schema
});

export type AttrPlicaLogData = v.InferOutput<typeof AttrPlicaLogSchema>;
