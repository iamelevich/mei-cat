import * as v from "valibot";

/**
 * Groups elements that represent editorial declaration parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.editorialDeclPart.html
 */
export const EditorialDeclPartSchema = v.object({
  // TODO: Add editorial declaration part elements
});

export type EditorialDeclPartData = v.InferOutput<typeof EditorialDeclPartSchema>;
