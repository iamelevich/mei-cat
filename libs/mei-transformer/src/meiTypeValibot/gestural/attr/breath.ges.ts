import * as v from "valibot";

/**
 * Attributes for breath.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.breath.ges.html
 */
export const AttrBreathGesSchema = v.object({
  // TODO: Add breath.ges attributes
});

export type AttrBreathGesData = v.InferOutput<typeof AttrBreathGesSchema>;
