import * as v from "valibot";

/**
 * Groups elements that represent imprint parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.imprintPart.html
 */
export const ImprintPartSchema = v.object({
  // TODO: Add imprint part elements
});

export type ImprintPartData = v.InferOutput<typeof ImprintPartSchema>;
