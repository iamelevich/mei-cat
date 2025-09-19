import * as v from "valibot";
import { type CbData, CbSchema } from "../element/cb";
import { type ColLayoutData, ColLayoutSchema } from "../element/colLayout";
import { type SbData, SbSchema } from "../element/sb";
import { type ModelPbLikeData, ModelPbLikeSchema } from "../model/pbLike";

/**
 * Groups milestone-style elements found in music notation.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.milestoneLike.music.html
 */
export const ModelMilestoneLikeMusicSchema: v.GenericSchema<ModelMilestoneLikeMusicData> =
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
				/**
				 * An empty formatting element that forces musical notation to begin on a new line.
				 * @see https://music-encoding.org/guidelines/v5/elements/sb.html
				 */
				sb: v.optional(v.union([v.array(SbSchema), SbSchema])),
			}),
			ModelPbLikeSchema,
		]),
	);

export type ModelMilestoneLikeMusicData = {
	cb?: CbData | CbData[];
	colLayout?: ColLayoutData | ColLayoutData[];
	sb?: SbData | SbData[];
} & ModelPbLikeData;
