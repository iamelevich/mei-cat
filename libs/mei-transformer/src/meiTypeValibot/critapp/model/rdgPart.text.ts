import * as v from "valibot";

/**
 * Groups elements that represent reading parts in text.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.rdgPart.text.html
 */
export const RdgPartTextSchema = v.object({
  // TODO: Add text reading part elements
});

export type RdgPartTextData = v.InferOutput<typeof RdgPartTextSchema>;
