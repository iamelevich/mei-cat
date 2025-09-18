import * as v from "valibot";

/**
 * Attributes for tremForm.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tremForm.html
 */
export const AttrTremFormSchema = v.object({
  // TODO: Add tremForm attributes
});

export type AttrTremFormData = v.InferOutput<typeof AttrTremFormSchema>;
