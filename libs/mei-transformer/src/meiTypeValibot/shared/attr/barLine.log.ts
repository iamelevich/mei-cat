import * as v from "valibot";

/**
 * Attributes for bar line logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.barLine.log.html
 */
export const AttrBarLineLogSchema = v.object({
  // TODO: Add bar line logging attributes
});

export type AttrBarLineLogData = v.InferOutput<typeof AttrBarLineLogSchema>;
