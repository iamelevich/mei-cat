import * as v from "valibot";

/**
 * Attributes for start ID.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.startId.html
 */
export const AttrStartIdSchema = v.object({
  // TODO: Add start ID attributes
});

export type AttrStartIdData = v.InferOutput<typeof AttrStartIdSchema>;
