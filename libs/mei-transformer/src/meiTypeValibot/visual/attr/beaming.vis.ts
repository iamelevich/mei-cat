import * as v from "valibot";

/**
 * Attributes for beaming.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beaming.vis.html
 */
export const AttrBeamingVisSchema = v.object({
  // TODO: Add beaming.vis attributes
});

export type AttrBeamingVisData = v.InferOutput<typeof AttrBeamingVisSchema>;
