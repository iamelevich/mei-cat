import * as v from "valibot";

/**
 * Attributes for origin staff identification.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.origin.staffIdent.html
 */
export const AttrOriginStaffIdentSchema = v.object({
  // TODO: Add origin staff identification attributes
});

export type AttrOriginStaffIdentData = v.InferOutput<typeof AttrOriginStaffIdentSchema>;
