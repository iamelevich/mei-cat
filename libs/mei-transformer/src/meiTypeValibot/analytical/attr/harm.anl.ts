import * as v from "valibot";

/**
 * Attributes for harm.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harm.anl.html
 */
export const AttrHarmAnlSchema = v.object({
  // TODO: Add harm.anl attributes
});

export type AttrHarmAnlData = v.InferOutput<typeof AttrHarmAnlSchema>;
