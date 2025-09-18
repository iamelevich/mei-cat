import * as v from "valibot";

/**
 * Attributes for tie.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tie.log.html
 */
export const AttrTieLogSchema = v.object({
	// TODO: Add tie.log attributes
});

export type AttrTieLogData = v.InferOutput<typeof AttrTieLogSchema>;
