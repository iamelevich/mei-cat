import * as v from "valibot";

/**
 * Attributes for trill.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.trill.anl.html
 */
export const AttrTrillAnlSchema = v.object({
  // TODO: Add trill.anl attributes
});

export type AttrTrillAnlData = v.InferOutput<typeof AttrTrillAnlSchema>;
