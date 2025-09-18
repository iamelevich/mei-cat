import * as v from "valibot";

/**
 * Attributes for staff items.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffItems.html
 */
export const AttrStaffItemsSchema = v.object({
  // TODO: Add staff items attributes
});

export type AttrStaffItemsData = v.InferOutput<typeof AttrStaffItemsSchema>;
