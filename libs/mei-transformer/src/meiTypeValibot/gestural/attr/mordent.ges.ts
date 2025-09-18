import * as v from "valibot";

/**
 * Attributes for mordent.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mordent.ges.html
 */
export const AttrMordentGesSchema = v.object({
  // TODO: Add mordent.ges attributes
});

export type AttrMordentGesData = v.InferOutput<typeof AttrMordentGesSchema>;
