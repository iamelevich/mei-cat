import * as v from "valibot";

/**
 * Attributes for quilisma.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.quilisma.anl.html
 */
export const AttrQuilismaAnlSchema = v.object({
  // TODO: Add quilisma.anl attributes
});

export type AttrQuilismaAnlData = v.InferOutput<typeof AttrQuilismaAnlSchema>;
