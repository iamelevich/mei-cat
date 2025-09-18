import * as v from "valibot";

/**
 * Attributes for solfa.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.solfa.html
 */
export const AttrSolfaSchema = v.object({
  // TODO: Add solfa attributes
});

export type AttrSolfaData = v.InferOutput<typeof AttrSolfaSchema>;
