import * as v from "valibot";

/**
 * Groups elements that represent neumepart parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.neumePart.html
 */
export const NeumePartSchema = v.object({
  // TODO: Add neumepart elements
});

export type NeumePartData = v.InferOutput<typeof NeumePartSchema>;
