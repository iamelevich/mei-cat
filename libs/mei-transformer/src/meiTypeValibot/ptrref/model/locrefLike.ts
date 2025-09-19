import * as v from "valibot";
import { type PtrData, PtrSchema, type RefData, RefSchema } from "..";

/**
 * Groups elements used for purposes of location and reference.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.locrefLike.html
 */
export const ModelLocrefLikeSchema: v.GenericSchema<ModelLocrefLikeData> =
	v.object({
		/**
		 * Defines a traversible pointer to another location, using only attributes to describe the destination.
		 * @see https://music-encoding.org/guidelines/v5/elements/ptr.html
		 */
		ptr: v.optional(
			v.union([v.lazy(() => PtrSchema), v.array(v.lazy(() => PtrSchema))]),
		),
		/**
		 * Defines a traversible reference to another location. May contain text and sub-elements that describe the destination.
		 * @see https://music-encoding.org/guidelines/v5/elements/ref.html
		 */
		ref: v.optional(
			v.union([v.lazy(() => RefSchema), v.array(v.lazy(() => RefSchema))]),
		),
	});

export type ModelLocrefLikeData = {
	ptr?: PtrData | PtrData[];
	ref?: RefData | RefData[];
};
