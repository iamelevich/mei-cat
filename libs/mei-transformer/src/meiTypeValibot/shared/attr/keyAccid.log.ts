import * as v from "valibot";

/**
 * Attributes for key accidental logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keyAccid.log.html
 */
export const AttrKeyAccidLogSchema = v.object({
  // TODO: Add key accidental logging attributes
});

export type AttrKeyAccidLogData = v.InferOutput<typeof AttrKeyAccidLogSchema>;
