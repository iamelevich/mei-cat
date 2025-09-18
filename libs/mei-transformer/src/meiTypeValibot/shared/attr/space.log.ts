import * as v from "valibot";

/**
 * Attributes for space logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.space.log.html
 */
export const AttrSpaceLogSchema = v.object({
  // TODO: Add space logging attributes
});

export type AttrSpaceLogData = v.InferOutput<typeof AttrSpaceLogSchema>;
