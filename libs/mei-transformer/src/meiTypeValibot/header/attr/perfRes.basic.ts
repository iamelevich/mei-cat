import * as v from "valibot";

/**
 * Basic attributes for performance responsibility.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.perfRes.basic.html
 */
export const AttrPerfResBasicSchema = v.object({
  // TODO: Add basic performance responsibility attributes
});

export type AttrPerfResBasicData = v.InferOutput<typeof AttrPerfResBasicSchema>;
