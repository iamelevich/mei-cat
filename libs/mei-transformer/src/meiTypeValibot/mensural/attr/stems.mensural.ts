import * as v from "valibot";

/**
 * Attributes for stems.mensural.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stems.mensural.html
 */
export const AttrStemsMensuralSchema = v.object({
  // TODO: Add stems.mensural attributes
});

export type AttrStemsMensuralData = v.InferOutput<typeof AttrStemsMensuralSchema>;
