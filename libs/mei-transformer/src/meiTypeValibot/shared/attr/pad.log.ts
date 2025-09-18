import * as v from "valibot";

/**
 * Attributes for pad logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pad.log.html
 */
export const AttrPadLogSchema = v.object({
  // TODO: Add pad logging attributes
});

export type AttrPadLogData = v.InferOutput<typeof AttrPadLogSchema>;
