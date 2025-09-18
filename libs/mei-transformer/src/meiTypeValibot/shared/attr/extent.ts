import * as v from "valibot";

/**
 * Attributes for extent.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.extent.html
 */
export const AttrExtentSchema = v.object({
  // TODO: Add extent attributes
});

export type AttrExtentData = v.InferOutput<typeof AttrExtentSchema>;
