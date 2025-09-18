import * as v from "valibot";

/**
 * Attributes for nNumberLike.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.nNumberLike.html
 */
export const AttrNNumberLikeSchema = v.object({
  // TODO: Add nNumberLike attributes
});

export type AttrNNumberLikeData = v.InferOutput<typeof AttrNNumberLikeSchema>;
