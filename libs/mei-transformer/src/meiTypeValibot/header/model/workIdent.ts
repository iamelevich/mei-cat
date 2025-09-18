import * as v from "valibot";

/**
 * Groups elements that represent work identification.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.workIdent.html
 */
export const WorkIdentSchema = v.object({
  // TODO: Add work identification elements
});

export type WorkIdentData = v.InferOutput<typeof WorkIdentSchema>;
