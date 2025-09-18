import * as v from "valibot";

/**
 * Attributes for formework.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.formework.html
 */
export const AttrFormeworkSchema = v.object({
  // TODO: Add formework attributes
});

export type AttrFormeworkData = v.InferOutput<typeof AttrFormeworkSchema>;
