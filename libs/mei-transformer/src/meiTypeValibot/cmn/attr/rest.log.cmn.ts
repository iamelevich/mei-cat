import * as v from "valibot";

/**
 * Logical domain attributes in the CMN repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rest.log.cmn.html
 */
export const AttrRestLogCmnSchema = v.object({
	// No attributes in MEI schema
});

export type AttrRestLogCmnData = v.InferOutput<typeof AttrRestLogCmnSchema>;
