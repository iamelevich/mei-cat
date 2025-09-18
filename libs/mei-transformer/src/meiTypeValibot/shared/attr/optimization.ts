import * as v from "valibot";

/**
 * Attributes for optimization.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.optimization.html
 */
export const AttrOptimizationSchema = v.object({
  // TODO: Add optimization attributes
});

export type AttrOptimizationData = v.InferOutput<typeof AttrOptimizationSchema>;
