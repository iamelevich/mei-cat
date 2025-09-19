import * as v from "valibot";
import {
	type CbData,
	CbSchema,
	type ColLayoutData,
	ColLayoutSchema,
	type ModelLbLikeData,
	ModelLbLikeSchema,
	type ModelPbLikeData,
	ModelPbLikeSchema,
} from "..";

/**
 * Groups milestone-style elements found in text.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.milestoneLike.text.html
 */
export const ModelMilestoneLikeTextSchema: v.GenericSchema<ModelMilestoneLikeTextData> =
	v.intersect([
		v.object({
			/**
			 * An empty formatting element that forces text to begin in a new column.
			 * @see https://music-encoding.org/guidelines/v5/elements/cb.html
			 */
			cb: v.optional(
				v.union([v.lazy(() => CbSchema), v.array(v.lazy(() => CbSchema))]),
			),
			/**
			 * An empty formatting element that signals the start of columnar layout.
			 * @see https://music-encoding.org/guidelines/v5/elements/colLayout.html
			 */
			colLayout: v.optional(
				v.union([
					v.lazy(() => ColLayoutSchema),
					v.array(v.lazy(() => ColLayoutSchema)),
				]),
			),
		}),
		ModelLbLikeSchema,
		ModelPbLikeSchema,
	]);

export type ModelMilestoneLikeTextData = {
	cb?: CbData | CbData[];
	colLayout?: ColLayoutData | ColLayoutData[];
} & ModelLbLikeData &
	ModelPbLikeData;
