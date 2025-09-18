import * as v from "valibot";

/**
 * Attributes for breath.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.breath.vis.html
 */
export const AttrBreathVisSchema = v.object({
  // TODO: Add breath.vis attributes
});

export type AttrBreathVisData = v.InferOutput<typeof AttrBreathVisSchema>;
