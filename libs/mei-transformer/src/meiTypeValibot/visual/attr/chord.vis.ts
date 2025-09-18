import * as v from "valibot";

/**
 * Attributes for chord.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chord.vis.html
 */
export const AttrChordVisSchema = v.object({
  // TODO: Add chord.vis attributes
});

export type AttrChordVisData = v.InferOutput<typeof AttrChordVisSchema>;
