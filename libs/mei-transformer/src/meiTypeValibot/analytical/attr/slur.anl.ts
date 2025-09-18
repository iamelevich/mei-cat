import * as v from "valibot";

/**
 * Attributes for slur.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.slur.anl.html
 */
export const AttrSlurAnlSchema = v.object({
  // TODO: Add slur.anl attributes
});

export type AttrSlurAnlData = v.InferOutput<typeof AttrSlurAnlSchema>;
