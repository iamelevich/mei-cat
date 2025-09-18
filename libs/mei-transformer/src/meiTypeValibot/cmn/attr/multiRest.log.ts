import * as v from "valibot";

/**
 * Attributes for multiRest.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.multiRest.log.html
 */
export const AttrMultiRestLogSchema = v.object({
  // TODO: Add multiRest.log attributes
});

export type AttrMultiRestLogData = v.InferOutput<typeof AttrMultiRestLogSchema>;
