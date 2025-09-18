import * as v from "valibot";

/**
 * Attributes for nc.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.nc.log.html
 */
export const AttrNcLogSchema = v.object({
  // TODO: Add nc.log attributes
});

export type AttrNcLogData = v.InferOutput<typeof AttrNcLogSchema>;
