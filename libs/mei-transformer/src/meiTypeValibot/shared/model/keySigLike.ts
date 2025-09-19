import * as v from "valibot";
import { type KeySigData, KeySigSchema } from "../element/keySig";

/**
 * Groups elements that have the same function as a key signature.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.keySigLike.html
 */
export const ModelKeySigLikeSchema: v.GenericSchema<ModelKeySigLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Written key signature.
			 * @see https://music-encoding.org/guidelines/v5/elements/keySig.html
			 */
			keySig: v.optional(v.union([v.array(KeySigSchema), KeySigSchema])),
		}),
	);

export type ModelKeySigLikeData = {
	keySig?: KeySigData | KeySigData[];
};
