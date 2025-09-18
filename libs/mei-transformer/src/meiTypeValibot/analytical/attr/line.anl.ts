import * as v from "valibot";

/**
 * Attributes for line.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.line.anl.html
 */
export const AttrLineAnlSchema = v.object({
  // TODO: Add line.anl attributes
});

export type AttrLineAnlData = v.InferOutput<typeof AttrLineAnlSchema>;
