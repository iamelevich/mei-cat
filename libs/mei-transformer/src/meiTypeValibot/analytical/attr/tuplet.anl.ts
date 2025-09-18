import * as v from "valibot";

/**
 * Attributes for tuplet.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tuplet.anl.html
 */
export const AttrTupletAnlSchema = v.object({
  // TODO: Add tuplet.anl attributes
});

export type AttrTupletAnlData = v.InferOutput<typeof AttrTupletAnlSchema>;
