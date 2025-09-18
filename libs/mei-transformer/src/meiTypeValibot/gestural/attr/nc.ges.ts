import * as v from "valibot";

/**
 * Attributes for nc.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.nc.ges.html
 */
export const AttrNcGesSchema = v.object({
  // TODO: Add nc.ges attributes
});

export type AttrNcGesData = v.InferOutput<typeof AttrNcGesSchema>;
