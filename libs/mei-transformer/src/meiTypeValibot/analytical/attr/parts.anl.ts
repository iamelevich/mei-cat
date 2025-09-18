import * as v from "valibot";

/**
 * Attributes for parts.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.parts.anl.html
 */
export const AttrPartsAnlSchema = v.object({
  // TODO: Add parts.anl attributes
});

export type AttrPartsAnlData = v.InferOutput<typeof AttrPartsAnlSchema>;
