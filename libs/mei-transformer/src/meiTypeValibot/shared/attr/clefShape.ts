import * as v from "valibot";

/**
 * Attributes for clef shape.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.clefShape.html
 */
export const AttrClefShapeSchema = v.object({
  // TODO: Add clef shape attributes
});

export type AttrClefShapeData = v.InferOutput<typeof AttrClefShapeSchema>;
