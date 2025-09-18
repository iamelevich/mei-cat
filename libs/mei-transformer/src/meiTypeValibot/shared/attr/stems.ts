import * as v from "valibot";

/**
 * Attributes for stems.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stems.html
 */
export const AttrStemsSchema = v.object({
  // TODO: Add stems attributes
});

export type AttrStemsData = v.InferOutput<typeof AttrStemsSchema>;
