import * as v from "valibot";

/**
 * Groups elements that represent title page parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.titlePagePart.html
 */
export const TitlePagePartSchema = v.object({
  // TODO: Add title page part elements
});

export type TitlePagePartData = v.InferOutput<typeof TitlePagePartSchema>;
