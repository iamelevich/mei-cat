import * as v from "valibot";

/**
 * Attributes for ossia.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ossia.log.html
 */
export const AttrOssiaLogSchema = v.object({
	// TODO: Add ossia.log attributes
});

export type AttrOssiaLogData = v.InferOutput<typeof AttrOssiaLogSchema>;
