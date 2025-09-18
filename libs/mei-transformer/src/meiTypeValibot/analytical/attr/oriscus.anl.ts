import * as v from "valibot";

/**
 * Attributes for oriscus.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.oriscus.anl.html
 */
export const AttrOriscusAnlSchema = v.object({
  // TODO: Add oriscus.anl attributes
});

export type AttrOriscusAnlData = v.InferOutput<typeof AttrOriscusAnlSchema>;
