import * as v from "valibot";

/**
 * Attributes for mordent.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mordent.log.html
 */
export const AttrMordentLogSchema = v.object({
	// TODO: Add mordent.log attributes
});

export type AttrMordentLogData = v.InferOutput<typeof AttrMordentLogSchema>;
