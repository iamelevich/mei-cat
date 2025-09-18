import * as v from "valibot";

/**
 * Attributes for basic elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.basic.html
 */
export const AttrBasicSchema = v.object({
  // TODO: Add basic attributes
});

export type AttrBasicData = v.InferOutput<typeof AttrBasicSchema>;
