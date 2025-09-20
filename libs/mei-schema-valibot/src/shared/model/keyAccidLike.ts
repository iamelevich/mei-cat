import * as v from "valibot";
import { type KeyAccidData, KeyAccidSchema } from "../element/keyAccid";

/**
 * Groups elements that represent accidentals in a key signature.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.keyAccidLike.html
 */
export const ModelKeyAccidLikeSchema: v.GenericSchema<ModelKeyAccidLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Accidental in a key signature.
			 * @see https://music-encoding.org/guidelines/v5/elements/keyAccid.html
			 */
			keyAccid: v.optional(v.union([v.array(KeyAccidSchema), KeyAccidSchema])),
		}),
	);

export type ModelKeyAccidLikeData = {
	keyAccid?: KeyAccidData | KeyAccidData[];
};
