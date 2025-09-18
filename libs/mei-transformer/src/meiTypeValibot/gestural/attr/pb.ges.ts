import * as v from "valibot";

/**
 * Attributes for pb.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pb.ges.html
 */
export const AttrPbGesSchema = v.object({
  // TODO: Add pb.ges attributes
});

export type AttrPbGesData = v.InferOutput<typeof AttrPbGesSchema>;
