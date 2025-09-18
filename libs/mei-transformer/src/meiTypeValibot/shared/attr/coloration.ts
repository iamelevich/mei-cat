import * as v from "valibot";

/**
 * Attributes for coloration.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.coloration.html
 */
export const AttrColorationSchema = v.object({
  // TODO: Add coloration attributes
});

export type AttrColorationData = v.InferOutput<typeof AttrColorationSchema>;
