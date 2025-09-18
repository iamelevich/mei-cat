import * as v from "valibot";

/**
 * Attributes for staff grouping symbol.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffGroupingSym.html
 */
export const AttrStaffGroupingSymSchema = v.object({
  // TODO: Add staff grouping symbol attributes
});

export type AttrStaffGroupingSymData = v.InferOutput<typeof AttrStaffGroupingSymSchema>;
