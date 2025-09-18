import * as v from "valibot";

/**
 * Attributes for graceGrp.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.graceGrp.log.html
 */
export const AttrGraceGrpLogSchema = v.object({
	// TODO: Add graceGrp.log attributes
});

export type AttrGraceGrpLogData = v.InferOutput<typeof AttrGraceGrpLogSchema>;
