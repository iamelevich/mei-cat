import * as v from "valibot";

/**
 * Attributes for calendared elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.calendared.html
 */
export const AttrCalendaredSchema = v.object({
  // TODO: Add calendared attributes
});

export type AttrCalendaredData = v.InferOutput<typeof AttrCalendaredSchema>;
