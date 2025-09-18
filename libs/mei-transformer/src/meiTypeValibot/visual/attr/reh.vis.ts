import * as v from "valibot";

/**
 * Attributes for reh.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.reh.vis.html
 */
export const AttrRehVisSchema = v.object({
  // TODO: Add reh.vis attributes
});

export type AttrRehVisData = v.InferOutput<typeof AttrRehVisSchema>;
