import * as v from "valibot";

/**
 * Attributes for proport.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.proport.ges.html
 */
export const AttrProportGesSchema = v.object({
  // TODO: Add proport.ges attributes
});

export type AttrProportGesData = v.InferOutput<typeof AttrProportGesSchema>;
