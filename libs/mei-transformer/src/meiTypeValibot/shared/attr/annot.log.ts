import * as v from "valibot";

/**
 * Attributes for annotation logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.annot.log.html
 */
export const AttrAnnotLogSchema = v.object({
  // TODO: Add annotation logging attributes
});

export type AttrAnnotLogData = v.InferOutput<typeof AttrAnnotLogSchema>;
