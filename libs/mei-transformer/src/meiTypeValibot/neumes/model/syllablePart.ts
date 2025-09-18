import * as v from "valibot";

/**
 * Groups elements that represent syllablepart parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.syllablePart.html
 */
export const SyllablePartSchema = v.object({
  // TODO: Add syllablepart elements
});

export type SyllablePartData = v.InferOutput<typeof SyllablePartSchema>;
