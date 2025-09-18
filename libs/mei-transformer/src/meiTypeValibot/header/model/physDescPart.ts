import * as v from "valibot";

/**
 * Groups elements that represent physical description parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.physDescPart.html
 */
export const PhysDescPartSchema = v.object({
  // TODO: Add physical description part elements
});

export type PhysDescPartData = v.InferOutput<typeof PhysDescPartSchema>;
