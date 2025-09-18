import * as v from "valibot";

/**
 * Attributes for internet media.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.internetMedia.html
 */
export const AttrInternetMediaSchema = v.object({
  // TODO: Add internet media attributes
});

export type AttrInternetMediaData = v.InferOutput<typeof AttrInternetMediaSchema>;
