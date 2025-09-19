import * as v from "valibot";
import { type FigData, FigSchema } from "../element/fig";

/**
 * Groups elements representing or containing graphic information such as an illustration or figure.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.figureLike.html
 */
export const ModelFigureLikeSchema: v.GenericSchema<ModelFigureLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Groups elements representing or containing graphic information such as an illustration or figure.
			 * @see https://music-encoding.org/guidelines/v5/elements/fig.html
			 */
			fig: v.optional(v.union([v.array(FigSchema), FigSchema])),
		}),
	);

export type ModelFigureLikeData = {
	fig?: FigData | FigData[];
};
