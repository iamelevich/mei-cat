import * as v from "valibot";

/**
 * Attributes for multiRpt.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.multiRpt.log.html
 */
export const AttrMultiRptLogSchema = v.object({
	// TODO: Add multiRpt.log attributes
});

export type AttrMultiRptLogData = v.InferOutput<typeof AttrMultiRptLogSchema>;
