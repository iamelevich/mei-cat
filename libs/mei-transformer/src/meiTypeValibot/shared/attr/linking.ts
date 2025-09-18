import * as v from "valibot";

/**
 * Attributes for linking elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
 */
export const AttrLinkingSchema = v.object({
  // TODO: Add linking attributes
});

export type AttrLinkingData = v.InferOutput<typeof AttrLinkingSchema>;
