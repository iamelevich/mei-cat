import * as v from "valibot";

/**
 * Attributes for mRest.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRest.log.html
 */
export const AttrMRestLogSchema = v.object({
	// TODO: Add mRest.log attributes
});

export type AttrMRestLogData = v.InferOutput<typeof AttrMRestLogSchema>;
