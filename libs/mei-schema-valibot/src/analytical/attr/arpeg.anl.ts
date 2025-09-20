import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.arpeg.anl.html
 */
export const AttrArpegAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrArpegAnlData = v.InferOutput<typeof AttrArpegAnlSchema>;
