import * as v from "valibot";

/**
 * Groups elements that represent front and back parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.frontAndBackPart.html
 */
export const FrontAndBackPartSchema = v.object({
  // TODO: Add front and back part elements
});

export type FrontAndBackPartData = v.InferOutput<typeof FrontAndBackPartSchema>;
