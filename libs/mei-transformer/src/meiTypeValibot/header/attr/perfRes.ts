import * as v from "valibot";

/**
 * Attributes for performance responsibility.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.perfRes.html
 */
export const AttrPerfResSchema = v.object({
  // TODO: Add performance responsibility attributes
});

export type AttrPerfResData = v.InferOutput<typeof AttrPerfResSchema>;
