import * as v from "valibot";

/**
 * Groups elements that represent reading parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.rdgPart.html
 */
export const RdgPartSchema = v.object({
  // TODO: Add reading part elements
});

export type RdgPartData = v.InferOutput<typeof RdgPartSchema>;
