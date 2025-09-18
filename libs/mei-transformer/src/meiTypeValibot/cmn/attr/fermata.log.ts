import * as v from "valibot";

/**
 * Attributes for fermata.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fermata.log.html
 */
export const AttrFermataLogSchema = v.object({
	// TODO: Add fermata.log attributes
});

export type AttrFermataLogData = v.InferOutput<typeof AttrFermataLogSchema>;
