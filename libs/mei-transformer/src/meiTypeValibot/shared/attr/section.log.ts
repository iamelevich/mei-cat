import * as v from "valibot";

/**
 * Attributes for section logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.section.log.html
 */
export const AttrSectionLogSchema = v.object({
  // TODO: Add section logging attributes
});

export type AttrSectionLogData = v.InferOutput<typeof AttrSectionLogSchema>;
