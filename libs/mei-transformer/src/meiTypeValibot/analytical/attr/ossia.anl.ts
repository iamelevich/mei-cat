import * as v from "valibot";

/**
 * Attributes for ossia.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ossia.anl.html
 */
export const AttrOssiaAnlSchema = v.object({
  // TODO: Add ossia.anl attributes
});

export type AttrOssiaAnlData = v.InferOutput<typeof AttrOssiaAnlSchema>;
