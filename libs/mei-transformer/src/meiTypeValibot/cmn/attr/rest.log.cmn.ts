import * as v from "valibot";

/**
 * Attributes for rest.log.cmn.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rest.log.cmn.html
 */
export const AttrRestLogCmnSchema = v.object({
	// TODO: Add rest.log.cmn attributes
});

export type AttrRestLogCmnData = v.InferOutput<typeof AttrRestLogCmnSchema>;
