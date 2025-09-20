import * as v from "valibot";
import { type LgData, LgSchema } from "../../shared/element/lg";

/**
 * Groups elements that have a line-grouping function.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.lgLike.html
 */
export const ModelLgLikeSchema: v.GenericSchema<ModelLgLikeData> = v.lazy(() =>
	v.object({
		/**
		 * May be used for any section of text that is organized as a group of lines; however, it is most often used for a group of verse lines functioning as a formal unit, e.g. , a stanza, refrain, verse paragraph, etc.
		 * @see https://music-encoding.org/guidelines/v5/elements/lg.html
		 */
		lg: v.optional(v.union([v.array(LgSchema), LgSchema])),
	}),
);

export type ModelLgLikeData = {
	lg?: LgData | LgData[];
};
