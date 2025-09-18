import * as v from "valibot";

/**
 * Attributes for rest logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rest.log.html
 */
export const AttrRestLogSchema = v.object({
  // TODO: Add rest logging attributes
});

export type AttrRestLogData = v.InferOutput<typeof AttrRestLogSchema>;
