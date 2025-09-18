import * as v from "valibot";

/**
 * Attributes for multiRest.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.multiRest.ges.html
 */
export const AttrMultiRestGesSchema = v.object({
  // TODO: Add multiRest.ges attributes
});

export type AttrMultiRestGesData = v.InferOutput<typeof AttrMultiRestGesSchema>;
