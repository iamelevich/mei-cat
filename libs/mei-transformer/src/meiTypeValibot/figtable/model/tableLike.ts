import * as v from "valibot";

/**
 * Groups elements that represent table-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.tableLike.html
 */
export const TableLikeSchema = v.object({
  // TODO: Add table-like elements
});

export type TableLikeData = v.InferOutput<typeof TableLikeSchema>;
