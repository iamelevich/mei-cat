import * as v from "valibot";
import { type FbData, FbSchema } from "..";

/**
 * Groups elements that record figured bass.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.figbassLike.html
 */
export const ModelFigbassLikeSchema: v.GenericSchema<ModelFigbassLikeData> =
	v.object({
		/**
		 * Symbols added to a bass line that indicate harmony. Used to improvise a chordal accompaniment. Sometimes called Generalbass, thoroughbass, or basso continuo.
		 * @see https://music-encoding.org/guidelines/v5/elements/fb.html
		 */
		fb: v.optional(
			v.union([v.lazy(() => FbSchema), v.array(v.lazy(() => FbSchema))]),
		),
	});

export type ModelFigbassLikeData = {
	fb?: FbData | FbData[];
};
