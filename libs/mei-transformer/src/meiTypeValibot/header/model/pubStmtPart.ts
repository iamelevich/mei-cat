import * as v from "valibot";

/**
 * Groups elements that represent publication statement parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.pubStmtPart.html
 */
export const PubStmtPartSchema = v.object({
  // TODO: Add publication statement part elements
});

export type PubStmtPartData = v.InferOutput<typeof PubStmtPartSchema>;
