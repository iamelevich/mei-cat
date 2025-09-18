import * as v from "valibot";

/**
 * Attributes for source.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.source.html
 */
export const AttrSourceSchema = v.object({
  // TODO: Add source attributes
});

export type AttrSourceData = v.InferOutput<typeof AttrSourceSchema>;
