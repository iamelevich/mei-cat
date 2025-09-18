import * as v from "valibot";

/**
 * Attributes for mSpace.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mSpace.log.html
 */
export const AttrMSpaceLogSchema = v.object({
	// TODO: Add mSpace.log attributes
});

export type AttrMSpaceLogData = v.InferOutput<typeof AttrMSpaceLogSchema>;
