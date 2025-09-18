import * as v from "valibot";

/**
 * Attributes for barLine.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.barLine.anl.html
 */
export const AttrBarLineAnlSchema = v.object({
  // TODO: Add barLine.anl attributes
});

export type AttrBarLineAnlData = v.InferOutput<typeof AttrBarLineAnlSchema>;
