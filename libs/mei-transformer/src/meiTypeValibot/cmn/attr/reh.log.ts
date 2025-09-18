import * as v from "valibot";

/**
 * Attributes for reh.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.reh.log.html
 */
export const AttrRehLogSchema = v.object({
  // TODO: Add reh.log attributes
});

export type AttrRehLogData = v.InferOutput<typeof AttrRehLogSchema>;
