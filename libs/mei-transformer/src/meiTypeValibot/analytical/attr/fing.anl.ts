import * as v from "valibot";

/**
 * Attributes for fing.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fing.anl.html
 */
export const AttrFingAnlSchema = v.object({
  // TODO: Add fing.anl attributes
});

export type AttrFingAnlData = v.InferOutput<typeof AttrFingAnlSchema>;
