import * as v from "valibot";

/**
 * Attributes for origin start end ID.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.origin.startEndId.html
 */
export const AttrOriginStartEndIdSchema = v.object({
  // TODO: Add origin start end ID attributes
});

export type AttrOriginStartEndIdData = v.InferOutput<typeof AttrOriginStartEndIdSchema>;
