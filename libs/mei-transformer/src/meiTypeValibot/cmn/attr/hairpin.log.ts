import * as v from "valibot";

/**
 * Attributes for hairpin.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.hairpin.log.html
 */
export const AttrHairpinLogSchema = v.object({
  // TODO: Add hairpin.log attributes
});

export type AttrHairpinLogData = v.InferOutput<typeof AttrHairpinLogSchema>;
