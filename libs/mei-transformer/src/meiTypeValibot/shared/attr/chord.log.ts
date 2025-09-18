import * as v from "valibot";

/**
 * Attributes for chord logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chord.log.html
 */
export const AttrChordLogSchema = v.object({
  // TODO: Add chord logging attributes
});

export type AttrChordLogData = v.InferOutput<typeof AttrChordLogSchema>;
