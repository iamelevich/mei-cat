import * as v from "valibot";

/**
 * Attributes for staff identification.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffIdent.html
 */
export const AttrStaffIdentSchema = v.object({
  // TODO: Add staff identification attributes
});

export type AttrStaffIdentData = v.InferOutput<typeof AttrStaffIdentSchema>;
