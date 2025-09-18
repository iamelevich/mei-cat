import * as v from "valibot";

/**
 * Attributes for labelled elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.labelled.html
 */
export const AttrLabelledSchema = v.object({
  // TODO: Add labelled attributes
});

export type AttrLabelledData = v.InferOutput<typeof AttrLabelledSchema>;
