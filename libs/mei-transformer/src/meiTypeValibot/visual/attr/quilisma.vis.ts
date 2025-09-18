import * as v from "valibot";

/**
 * Attributes for quilisma.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.quilisma.vis.html
 */
export const AttrQuilismaVisSchema = v.object({
  // TODO: Add quilisma.vis attributes
});

export type AttrQuilismaVisData = v.InferOutput<typeof AttrQuilismaVisSchema>;
