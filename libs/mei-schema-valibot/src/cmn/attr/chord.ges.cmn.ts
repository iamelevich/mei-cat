import * as v from "valibot";

/**
 * Gestural domain attributes for CMN features..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chord.ges.cmn.html
 */
export const AttrChordGesCmnSchema = v.object({
	// No attributes in MEI schema
});

export type AttrChordGesCmnData = v.InferOutput<typeof AttrChordGesCmnSchema>;
