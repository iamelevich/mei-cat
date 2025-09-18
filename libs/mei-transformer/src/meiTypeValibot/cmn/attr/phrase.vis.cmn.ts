import * as v from "valibot";

/**
 * Attributes for phrase.vis.cmn.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.phrase.vis.cmn.html
 */
export const AttrPhraseVisCmnSchema = v.object({
	// TODO: Add phrase.vis.cmn attributes
});

export type AttrPhraseVisCmnData = v.InferOutput<typeof AttrPhraseVisCmnSchema>;
