import * as v from "valibot";

/**
 * Attributes for mensural.shared.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensural.shared.html
 */
export const AttrMensuralSharedSchema = v.object({
  // TODO: Add mensural.shared attributes
});

export type AttrMensuralSharedData = v.InferOutput<typeof AttrMensuralSharedSchema>;
