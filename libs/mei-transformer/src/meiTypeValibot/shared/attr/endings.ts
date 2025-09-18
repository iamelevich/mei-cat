import * as v from "valibot";

/**
 * Attributes for endings.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.endings.html
 */
export const AttrEndingsSchema = v.object({
  // TODO: Add endings attributes
});

export type AttrEndingsData = v.InferOutput<typeof AttrEndingsSchema>;
