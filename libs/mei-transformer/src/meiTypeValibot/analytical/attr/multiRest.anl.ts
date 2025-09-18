import * as v from "valibot";

/**
 * Attributes for multiRest.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.multiRest.anl.html
 */
export const AttrMultiRestAnlSchema = v.object({
  // TODO: Add multiRest.anl attributes
});

export type AttrMultiRestAnlData = v.InferOutput<typeof AttrMultiRestAnlSchema>;
