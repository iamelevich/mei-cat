import * as v from "valibot";

/**
 * Attributes for page break logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pb.log.html
 */
export const AttrPbLogSchema = v.object({
  // TODO: Add page break logging attributes
});

export type AttrPbLogData = v.InferOutput<typeof AttrPbLogSchema>;
