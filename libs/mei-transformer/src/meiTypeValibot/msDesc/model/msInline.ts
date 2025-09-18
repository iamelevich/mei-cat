import * as v from "valibot";

/**
 * Groups elements that represent manuscript inline elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.msInline.html
 */
export const MsInlineSchema = v.object({
  // TODO: Add manuscript inline elements
});

export type MsInlineData = v.InferOutput<typeof MsInlineSchema>;
