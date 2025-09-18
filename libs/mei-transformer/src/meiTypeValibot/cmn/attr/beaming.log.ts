import * as v from "valibot";

/**
 * Attributes for beaming.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beaming.log.html
 */
export const AttrBeamingLogSchema = v.object({
  // TODO: Add beaming.log attributes
});

export type AttrBeamingLogData = v.InferOutput<typeof AttrBeamingLogSchema>;
