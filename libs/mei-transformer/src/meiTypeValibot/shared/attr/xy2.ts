import * as v from "valibot";

/**
 * Attributes for xy2.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.xy2.html
 */
export const AttrXy2Schema = v.object({
  // TODO: Add xy2 attributes
});

export type AttrXy2Data = v.InferOutput<typeof AttrXy2Schema>;
