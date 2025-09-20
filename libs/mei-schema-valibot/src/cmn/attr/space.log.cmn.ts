import * as v from "valibot";

/**
 * Logical domain attributes in the CMN repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.space.log.cmn.html
 */
export const AttrSpaceLogCmnSchema = v.object({
	// No attributes in MEI schema
});

export type AttrSpaceLogCmnData = v.InferOutput<typeof AttrSpaceLogCmnSchema>;
