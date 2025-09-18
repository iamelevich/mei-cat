import * as v from "valibot";

/**
 * Attributes for systems.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.systems.html
 */
export const AttrSystemsSchema = v.object({
  // TODO: Add systems attributes
});

export type AttrSystemsData = v.InferOutput<typeof AttrSystemsSchema>;
