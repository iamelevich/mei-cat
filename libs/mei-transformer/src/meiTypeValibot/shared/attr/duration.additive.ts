import * as v from "valibot";

/**
 * Attributes for additive duration.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.duration.additive.html
 */
export const AttrDurationAdditiveSchema = v.object({
  // TODO: Add additive duration attributes
});

export type AttrDurationAdditiveData = v.InferOutput<typeof AttrDurationAdditiveSchema>;
