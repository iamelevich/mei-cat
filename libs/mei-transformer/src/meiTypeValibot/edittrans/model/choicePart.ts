import * as v from "valibot";

/**
 * Groups elements that represent choice parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.choicePart.html
 */
export const ChoicePartSchema = v.object({
  // TODO: Add choice part elements
});

export type ChoicePartData = v.InferOutput<typeof ChoicePartSchema>;
