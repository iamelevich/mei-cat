import * as v from "valibot";
import { PbSchema } from "../pb";

/**
 * Groups elements that represent page break-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.pbLike.html
 */
export const PbLikeSchema = v.object({
	/**
	 * An empty formatting element that forces text to begin on a new page.
	 * @see https://music-encoding.org/guidelines/v5/elements/pb.html
	 */
	pb: v.optional(
		v.union([v.lazy(() => PbSchema), v.array(v.lazy(() => PbSchema))]),
	),
});

export type PbLikeData = v.InferOutput<typeof PbLikeSchema>;
