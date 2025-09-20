import * as v from "valibot";
import { type DivData, DivSchema } from "../../shared/element/div";

/**
 * Groups elements used to represent generic structural divisions of text.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.divLike.html
 */
export const ModelDivLikeSchema: v.GenericSchema<ModelDivLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * Major structural division of text, such as a preface, chapter or section.
			 * @see https://music-encoding.org/guidelines/v5/elements/div.html
			 */
			div: v.optional(v.union([v.array(DivSchema), DivSchema])),
		}),
);

export type ModelDivLikeData = {
	div?: DivData | DivData[];
};
