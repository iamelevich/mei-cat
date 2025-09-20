import * as v from "valibot";
import { type CbData, CbSchema } from "../element/cb";
import { type ColLayoutData, ColLayoutSchema } from "../element/colLayout";
import { type ModelLbLikeData, ModelLbLikeSchema } from "./lbLike";
import { type ModelPbLikeData, ModelPbLikeSchema } from "./pbLike";

/**
 * Groups milestone-style elements found in text.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.milestoneLike.text.html
 */
export const ModelMilestoneLikeTextSchema: v.GenericSchema<ModelMilestoneLikeTextData> =
	v.lazy(() =>
		v.intersect([
			v.object({
				/**
				 * An empty formatting element that forces text to begin in a new column.
				 * @see https://music-encoding.org/guidelines/v5/elements/cb.html
				 */
				cb: v.optional(v.union([v.array(CbSchema), CbSchema])),
				/**
				 * An empty formatting element that signals the start of columnar layout.
				 * @see https://music-encoding.org/guidelines/v5/elements/colLayout.html
				 */
				colLayout: v.optional(
					v.union([v.array(ColLayoutSchema), ColLayoutSchema]),
				),
			}),
			ModelLbLikeSchema,
			ModelPbLikeSchema,
		]),
	);

export type ModelMilestoneLikeTextData = {
	cb?: CbData | CbData[];
	colLayout?: ColLayoutData | ColLayoutData[];
} & ModelLbLikeData &
	ModelPbLikeData;
