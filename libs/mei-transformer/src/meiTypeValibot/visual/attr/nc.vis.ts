import * as v from "valibot";

/**
 * Attributes for nc.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.nc.vis.html
 */
export const AttrNcVisSchema = v.object({
  // TODO: Add nc.vis attributes
});

export type AttrNcVisData = v.InferOutput<typeof AttrNcVisSchema>;
