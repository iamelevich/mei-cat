import * as v from "valibot";
import { type FigDescData, FigDescSchema } from "../element/figDesc";

/**
 * Groups elements that provide a brief prose description of the appearance or content of a graphic figure.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.figDescLike.html
 */
export const ModelFigDescLikeSchema: v.GenericSchema<ModelFigDescLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Contains a brief prose description of the appearance or content of a graphic figure, for use when documenting an image without displaying it.
			 * @see https://music-encoding.org/guidelines/v5/elements/figDesc.html
			 */
			figDesc: v.optional(v.union([v.array(FigDescSchema), FigDescSchema])),
		}),
	);

export type ModelFigDescLikeData = {
	figDesc?: FigDescData | FigDescData[];
};
