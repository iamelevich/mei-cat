import * as v from "valibot";

/**
 * Attributes for volta grouping symbol.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.voltaGroupingSym.html
 */
export const AttrVoltaGroupingSymSchema = v.object({
  // TODO: Add volta grouping symbol attributes
});

export type AttrVoltaGroupingSymData = v.InferOutput<typeof AttrVoltaGroupingSymSchema>;
