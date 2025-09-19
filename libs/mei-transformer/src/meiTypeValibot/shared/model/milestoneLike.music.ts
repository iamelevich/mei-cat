import * as v from "valibot";
import {
	type CbData,
	CbSchema,
	type ColLayoutData,
	ColLayoutSchema,
	type ModelPbLikeData,
	ModelPbLikeSchema,
	type SbData,
	SbSchema,
} from "..";

/**
 * Groups milestone-style elements found in music notation.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.milestoneLike.music.html
 */
export const ModelMilestoneLikeMusicSchema: v.GenericSchema<ModelMilestoneLikeMusicData> =
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
			/**
			 * An empty formatting element that forces musical notation to begin on a new line.
			 * @see https://music-encoding.org/guidelines/v5/elements/sb.html
			 */
			sb: v.optional(
				v.union([v.lazy(() => SbSchema), v.array(v.lazy(() => SbSchema))]),
			),
		}),
		ModelPbLikeSchema,
	]);

export type ModelMilestoneLikeMusicData = {
	cb?: CbData | CbData[];
	colLayout?: ColLayoutData | ColLayoutData[];
	sb?: SbData | SbData[];
} & ModelPbLikeData;
