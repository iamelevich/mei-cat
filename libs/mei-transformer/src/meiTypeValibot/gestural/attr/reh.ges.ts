import * as v from "valibot";

/**
 * Attributes for reh.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.reh.ges.html
 */
export const AttrRehGesSchema = v.object({
  // TODO: Add reh.ges attributes
});

export type AttrRehGesData = v.InferOutput<typeof AttrRehGesSchema>;
