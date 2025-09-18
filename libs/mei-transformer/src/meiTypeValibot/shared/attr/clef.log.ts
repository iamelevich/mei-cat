import * as v from "valibot";

/**
 * Attributes for clef logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.clef.log.html
 */
export const AttrClefLogSchema = v.object({
  // TODO: Add clef logging attributes
});

export type AttrClefLogData = v.InferOutput<typeof AttrClefLogSchema>;
