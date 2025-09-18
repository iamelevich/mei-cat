import * as v from "valibot";

/**
 * Attributes for start end ID.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.startEndId.html
 */
export const AttrStartEndIdSchema = v.object({
  // TODO: Add start end ID attributes
});

export type AttrStartEndIdData = v.InferOutput<typeof AttrStartEndIdSchema>;
