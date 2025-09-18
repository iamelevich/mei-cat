import * as v from "valibot";

/**
 * Attributes for geneticState.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.geneticState.html
 */
export const AttrGeneticStateSchema = v.object({
  // TODO: Add geneticState attributes
});

export type AttrGeneticStateData = v.InferOutput<typeof AttrGeneticStateSchema>;
