import * as v from "valibot";

/**
 * Attributes for repeatMark.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.repeatMark.anl.html
 */
export const AttrRepeatMarkAnlSchema = v.object({
  // TODO: Add repeatMark.anl attributes
});

export type AttrRepeatMarkAnlData = v.InferOutput<typeof AttrRepeatMarkAnlSchema>;
