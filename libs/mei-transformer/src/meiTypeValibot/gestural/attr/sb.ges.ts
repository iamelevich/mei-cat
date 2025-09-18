import * as v from "valibot";

/**
 * Attributes for sb.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.sb.ges.html
 */
export const AttrSbGesSchema = v.object({
  // TODO: Add sb.ges attributes
});

export type AttrSbGesData = v.InferOutput<typeof AttrSbGesSchema>;
