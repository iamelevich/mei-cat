import * as v from "valibot";
import { type IdentifierData, IdentifierSchema } from "../element/identifier";

/**
 * Groups identifier-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.identifierLike.html
 */
export const ModelIdentifierLikeSchema: v.GenericSchema<ModelIdentifierLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * An alpha-numeric string that establishes the identity of the described material.
			 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
			 */
			identifier: v.optional(
				v.union([v.array(IdentifierSchema), IdentifierSchema]),
			),
		}),
	);

export type ModelIdentifierLikeData = {
	identifier?: IdentifierData | IdentifierData[];
};
