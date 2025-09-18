import * as v from "valibot";

/**
 * Attributes for regular method.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.regularMethod.html
 */
export const AttrRegularMethodSchema = v.object({
  // TODO: Add regular method attributes
});

export type AttrRegularMethodData = v.InferOutput<typeof AttrRegularMethodSchema>;
