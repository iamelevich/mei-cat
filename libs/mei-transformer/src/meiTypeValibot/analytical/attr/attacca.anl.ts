import * as v from "valibot";

/**
 * Attributes for attacca.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.attacca.anl.html
 */
export const AttrAttaccaAnlSchema = v.object({
  // TODO: Add attacca.anl attributes
});

export type AttrAttaccaAnlData = v.InferOutput<typeof AttrAttaccaAnlSchema>;
