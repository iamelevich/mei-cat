import * as v from "valibot";

/**
 * Groups elements that represent personal name parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.persNamePart.html
 */
export const PersNamePartSchema = v.object({
  // TODO: Add personal name part elements
});

export type PersNamePartData = v.InferOutput<typeof PersNamePartSchema>;
