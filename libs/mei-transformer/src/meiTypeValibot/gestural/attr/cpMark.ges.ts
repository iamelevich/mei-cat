import * as v from "valibot";

/**
 * Attributes for cpMark.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.cpMark.ges.html
 */
export const AttrCpMarkGesSchema = v.object({
  // TODO: Add cpMark.ges attributes
});

export type AttrCpMarkGesData = v.InferOutput<typeof AttrCpMarkGesSchema>;
