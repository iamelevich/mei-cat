import * as v from "valibot";

/**
 * Attributes for record type.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.recordType.html
 */
export const AttrRecordTypeSchema = v.object({
  // TODO: Add record type attributes
});

export type AttrRecordTypeData = v.InferOutput<typeof AttrRecordTypeSchema>;
