import * as v from "valibot";

/**
 * Attributes for tieRend.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tieRend.html
 */
export const AttrTieRendSchema = v.object({
  // TODO: Add tieRend attributes
});

export type AttrTieRendData = v.InferOutput<typeof AttrTieRendSchema>;
