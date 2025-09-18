import * as v from "valibot";

/**
 * Attributes for default duration.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.duration.default.html
 */
export const AttrDurationDefaultSchema = v.object({
  // TODO: Add default duration attributes
});

export type AttrDurationDefaultData = v.InferOutput<typeof AttrDurationDefaultSchema>;
