import * as v from "valibot";

/**
 * Attributes for rest.anl.cmn.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rest.anl.cmn.html
 */
export const AttrRestAnlCmnSchema = v.object({
  // TODO: Add rest.anl.cmn attributes
});

export type AttrRestAnlCmnData = v.InferOutput<typeof AttrRestAnlCmnSchema>;
