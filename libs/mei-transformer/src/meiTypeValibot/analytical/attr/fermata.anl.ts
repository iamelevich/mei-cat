import * as v from "valibot";

/**
 * Attributes for fermata.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fermata.anl.html
 */
export const AttrFermataAnlSchema = v.object({
  // TODO: Add fermata.anl attributes
});

export type AttrFermataAnlData = v.InferOutput<typeof AttrFermataAnlSchema>;
