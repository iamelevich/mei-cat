import * as v from "valibot";

/**
 * Attributes for ornament logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ornam.log.html
 */
export const AttrOrnamLogSchema = v.object({
  // TODO: Add ornament logging attributes
});

export type AttrOrnamLogData = v.InferOutput<typeof AttrOrnamLogSchema>;
