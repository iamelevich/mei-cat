import * as v from "valibot";

/**
 * Attributes for cpMark.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.cpMark.vis.html
 */
export const AttrCpMarkVisSchema = v.object({
  // TODO: Add cpMark.vis attributes
});

export type AttrCpMarkVisData = v.InferOutput<typeof AttrCpMarkVisSchema>;
