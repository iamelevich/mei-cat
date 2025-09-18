import * as v from "valibot";

/**
 * Attributes for oriscus.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.oriscus.ges.html
 */
export const AttrOriscusGesSchema = v.object({
  // TODO: Add oriscus.ges attributes
});

export type AttrOriscusGesData = v.InferOutput<typeof AttrOriscusGesSchema>;
