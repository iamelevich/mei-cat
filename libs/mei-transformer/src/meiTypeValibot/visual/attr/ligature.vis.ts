import * as v from "valibot";

/**
 * Attributes for ligature.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ligature.vis.html
 */
export const AttrLigatureVisSchema = v.object({
  // TODO: Add ligature.vis attributes
});

export type AttrLigatureVisData = v.InferOutput<typeof AttrLigatureVisSchema>;
