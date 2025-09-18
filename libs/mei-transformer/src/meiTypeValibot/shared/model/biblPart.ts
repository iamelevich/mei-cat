import * as v from "valibot";

/**
 * Groups elements that represent bibliographic parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.biblPart.html
 */
export const BiblPartSchema = v.object({
  // TODO: Add bibliographic part elements
});

export type BiblPartData = v.InferOutput<typeof BiblPartSchema>;
