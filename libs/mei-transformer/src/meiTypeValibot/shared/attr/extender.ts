import * as v from "valibot";

/**
 * Attributes for extender elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.extender.html
 */
export const AttrExtenderSchema = v.object({
  // TODO: Add extender attributes
});

export type AttrExtenderData = v.InferOutput<typeof AttrExtenderSchema>;
