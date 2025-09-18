import * as v from "valibot";
import { HeadSchema } from "../head";

/**
 * Groups elements that represent head-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.headLike.html
 */
export const HeadLikeSchema = v.object({
	/**
	 * Contains any heading, for example, the title of a section of text, or the heading of a list.
	 * @see https://music-encoding.org/guidelines/v5/elements/head.html
	 */
	head: v.optional(
		v.union([v.lazy(() => HeadSchema), v.array(v.lazy(() => HeadSchema))]),
	),
});

export type HeadLikeData = v.InferOutput<typeof HeadLikeSchema>;
