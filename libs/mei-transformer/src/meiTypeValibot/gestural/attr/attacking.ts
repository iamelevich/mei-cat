import * as v from "valibot";

/**
 * Attributes for attacking.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.attacking.html
 */
export const AttrAttackingSchema = v.object({
  // TODO: Add attacking attributes
});

export type AttrAttackingData = v.InferOutput<typeof AttrAttackingSchema>;
