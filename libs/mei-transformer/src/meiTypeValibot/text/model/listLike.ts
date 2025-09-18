import * as v from "valibot";
import { LiSchema } from "../li";
import { ListSchema } from "../list";

/**
 * Groups elements used to represent a list.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.listLike.html
 */
export const ListLikeSchema = v.object({
  /**
   * Single instance or exemplar of an item in a list.
   * @see https://music-encoding.org/guidelines/v5/elements/li.html
   */
  li: v.optional(
    v.union([v.lazy(() => LiSchema), v.array(v.lazy(() => LiSchema))]),
  ),

  /**
   * A formatting element that contains a series of items separated from one another and arranged in a vertical, horizontal, or matrix-like manner.
   * @see https://music-encoding.org/guidelines/v5/elements/list.html
   */
  list: v.optional(
    v.union([v.lazy(() => ListSchema), v.array(v.lazy(() => ListSchema))]),
  ),
});

export type ListLikeData = v.InferOutput<typeof ListLikeSchema>;
