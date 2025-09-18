import * as v from "valibot";

/**
 * Attributes for mRest.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRest.vis.html
 */
export const AttrMRestVisSchema = v.object({
  // TODO: Add mRest.vis attributes
});

export type AttrMRestVisData = v.InferOutput<typeof AttrMRestVisSchema>;
