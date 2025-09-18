import * as v from "valibot";

/**
 * Groups elements that represent limited text phrases.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.textPhraseLike.limited.html
 */
export const TextPhraseLikeLimitedSchema = v.object({
  // TODO: Add limited text phrase elements
});

export type TextPhraseLikeLimitedData = v.InferOutput<typeof TextPhraseLikeLimitedSchema>;
