import * as v from "valibot";

/**
 * Groups elements that represent paracontent parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.paracontentPart.html
 */
export const ParacontentPartSchema = v.object({
  // TODO: Add paracontent part elements
});

export type ParacontentPartData = v.InferOutput<typeof ParacontentPartSchema>;
