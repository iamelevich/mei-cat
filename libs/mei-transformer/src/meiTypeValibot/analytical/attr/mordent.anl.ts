import * as v from "valibot";

/**
 * Attributes for mordent.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mordent.anl.html
 */
export const AttrMordentAnlSchema = v.object({
  // TODO: Add mordent.anl attributes
});

export type AttrMordentAnlData = v.InferOutput<typeof AttrMordentAnlSchema>;
