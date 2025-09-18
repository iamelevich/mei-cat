import * as v from "valibot";

/**
 * Attributes for joined elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.joined.html
 */
export const AttrJoinedSchema = v.object({
  // TODO: Add joined attributes
});

export type AttrJoinedData = v.InferOutput<typeof AttrJoinedSchema>;
