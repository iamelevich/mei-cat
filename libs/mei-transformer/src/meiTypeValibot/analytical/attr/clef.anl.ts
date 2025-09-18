import * as v from "valibot";

/**
 * Attributes for clef.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.clef.anl.html
 */
export const AttrClefAnlSchema = v.object({
  // TODO: Add clef.anl attributes
});

export type AttrClefAnlData = v.InferOutput<typeof AttrClefAnlSchema>;
