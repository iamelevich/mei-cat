import * as v from "valibot";

/**
 * Attributes for ID.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.id.html
 */
export const AttrIdSchema = v.object({
  // TODO: Add ID attributes
});

export type AttrIdData = v.InferOutput<typeof AttrIdSchema>;
