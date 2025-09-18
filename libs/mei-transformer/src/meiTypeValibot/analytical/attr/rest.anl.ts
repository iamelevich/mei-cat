import * as v from "valibot";

/**
 * Attributes for rest.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rest.anl.html
 */
export const AttrRestAnlSchema = v.object({
  // TODO: Add rest.anl attributes
});

export type AttrRestAnlData = v.InferOutput<typeof AttrRestAnlSchema>;
