import * as v from "valibot";

/**
 * Attributes for harmonicFunction.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harmonicFunction.html
 */
export const AttrHarmonicFunctionSchema = v.object({
  // TODO: Add harmonicFunction attributes
});

export type AttrHarmonicFunctionData = v.InferOutput<typeof AttrHarmonicFunctionSchema>;
