import * as v from "valibot";

/**
 * Attributes for mensural.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensural.vis.html
 */
export const AttrMensuralVisSchema = v.object({
  // TODO: Add mensural.vis attributes
});

export type AttrMensuralVisData = v.InferOutput<typeof AttrMensuralVisSchema>;
