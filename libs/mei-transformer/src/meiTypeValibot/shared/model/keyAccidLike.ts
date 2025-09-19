import * as v from "valibot";
import { type KeyAccidData, KeyAccidSchema } from "..";

/**
 * Groups elements that represent accidentals in a key signature.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.keyAccidLike.html
 */
export const ModelKeyAccidLikeSchema: v.GenericSchema<ModelKeyAccidLikeData> =
	v.object({
		/**
		 * Accidental in a key signature.
		 * @see https://music-encoding.org/guidelines/v5/elements/keyAccid.html
		 */
		keyAccid: v.optional(
			v.union([
				v.lazy(() => KeyAccidSchema),
				v.array(v.lazy(() => KeyAccidSchema)),
			]),
		),
	});

export type ModelKeyAccidLikeData = {
	keyAccid?: KeyAccidData | KeyAccidData[];
};
