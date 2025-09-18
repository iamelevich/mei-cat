import * as v from "valibot";

/**
 * Attributes for vertical group.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.verticalGroup.html
 */
export const AttrVerticalGroupSchema = v.object({
  // TODO: Add vertical group attributes
});

export type AttrVerticalGroupData = v.InferOutput<typeof AttrVerticalGroupSchema>;
