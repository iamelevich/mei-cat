import * as v from "valibot";

/**
 * Attributes for rest.ges.mensural.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rest.ges.mensural.html
 */
export const AttrRestGesMensuralSchema = v.object({
  // TODO: Add rest.ges.mensural attributes
});

export type AttrRestGesMensuralData = v.InferOutput<typeof AttrRestGesMensuralSchema>;
