import * as v from "valibot";

/**
 * Attributes for chord.vis.cmn.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chord.vis.cmn.html
 */
export const AttrChordVisCmnSchema = v.object({
	// TODO: Add chord.vis.cmn attributes
});

export type AttrChordVisCmnData = v.InferOutput<typeof AttrChordVisCmnSchema>;
