import * as v from "valibot";

/**
 * Groups elements that represent symboltablelike parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.symbolTableLike.html
 */
export const SymbolTableLikeSchema = v.object({
  // TODO: Add symboltablelike elements
});

export type SymbolTableLikeData = v.InferOutput<typeof SymbolTableLikeSchema>;
