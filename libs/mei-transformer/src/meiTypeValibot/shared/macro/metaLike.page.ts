import * as v from "valibot";

/**
 * Macro group for metadata-like page elements.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/macro.metaLike.page.html
 */
export const MacroMetaLikePageSchema = v.object({
  // TODO: Add metadata-like page elements
});

export type MacroMetaLikePageData = v.InferOutput<typeof MacroMetaLikePageSchema>;
