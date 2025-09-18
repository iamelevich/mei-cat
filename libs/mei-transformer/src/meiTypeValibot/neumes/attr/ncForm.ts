import * as v from "valibot";

/**
 * Attributes for ncForm.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ncForm.html
 */
export const AttrNcFormSchema = v.object({
  // TODO: Add ncForm attributes
});

export type AttrNcFormData = v.InferOutput<typeof AttrNcFormSchema>;
