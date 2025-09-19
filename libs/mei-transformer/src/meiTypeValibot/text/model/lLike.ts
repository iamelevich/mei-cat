import * as v from "valibot";
import { type LData, LSchema } from "../element/l";

/**
 * Groups elements representing metrical components such as verse lines.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.lLike.html
 */
export const ModelLLikeSchema: v.GenericSchema<ModelLLikeData> = v.lazy(() =>
	v.object({
		/**
		 * Contains a single line of text within a line group.
		 * @see https://music-encoding.org/guidelines/v5/elements/l.html
		 */
		l: v.optional(v.union([v.array(LSchema), LSchema])),
	}),
);

export type ModelLLikeData = {
	l?: LData | LData[];
};
