import * as v from "valibot";

/**
 * Attributes for chord.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chord.ges.html
 */
export const AttrChordGesSchema = v.object({
  // TODO: Add chord.ges attributes
});

export type AttrChordGesData = v.InferOutput<typeof AttrChordGesSchema>;
