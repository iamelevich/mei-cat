import * as v from "valibot";

/**
 * Attributes for part.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.part.anl.html
 */
export const AttrPartAnlSchema = v.object({
  // TODO: Add part.anl attributes
});

export type AttrPartAnlData = v.InferOutput<typeof AttrPartAnlSchema>;
