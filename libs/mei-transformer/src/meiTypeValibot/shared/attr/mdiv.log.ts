import * as v from "valibot";

/**
 * Attributes for musical division logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mdiv.log.html
 */
export const AttrMdivLogSchema = v.object({
  // TODO: Add musical division logging attributes
});

export type AttrMdivLogData = v.InferOutput<typeof AttrMdivLogSchema>;
