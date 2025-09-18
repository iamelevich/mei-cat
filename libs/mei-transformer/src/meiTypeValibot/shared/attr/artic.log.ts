import * as v from "valibot";

/**
 * Attributes for articulation logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.artic.log.html
 */
export const AttrArticLogSchema = v.object({
  // TODO: Add articulation logging attributes
});

export type AttrArticLogData = v.InferOutput<typeof AttrArticLogSchema>;
