import * as v from "valibot";
import { type TitleData, TitleSchema } from "..";

/**
 * Groups elements that denote the name of a bibliographic item.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.titleLike.html
 */
export const ModelTitleLikeSchema: v.GenericSchema<ModelTitleLikeData> =
	v.object({
		/**
		 * Title of a bibliographic entity.
		 * @see https://music-encoding.org/guidelines/v5/elements/title.html
		 */
		title: v.optional(
			v.union([v.lazy(() => TitleSchema), v.array(v.lazy(() => TitleSchema))]),
		),
	});

export type ModelTitleLikeData = {
	title?: TitleData | TitleData[];
};
