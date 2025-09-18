import * as v from "valibot";

/**
 * Attributes for sp.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.sp.log.html
 */
export const AttrSpLogSchema = v.object({
  // TODO: Add sp.log attributes
});

export type AttrSpLogData = v.InferOutput<typeof AttrSpLogSchema>;
