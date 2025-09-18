import * as v from "valibot";

/**
 * Groups elements that represent header parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.headerPart.html
 */
export const HeaderPartSchema = v.object({
  // TODO: Add header part elements
});

export type HeaderPartData = v.InferOutput<typeof HeaderPartSchema>;
