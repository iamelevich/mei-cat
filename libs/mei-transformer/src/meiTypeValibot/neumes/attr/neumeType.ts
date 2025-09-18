import * as v from "valibot";

/**
 * Attributes for neumeType.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.neumeType.html
 */
export const AttrNeumeTypeSchema = v.object({
  // TODO: Add neumeType attributes
});

export type AttrNeumeTypeData = v.InferOutput<typeof AttrNeumeTypeSchema>;
