import * as v from "valibot";
import { type CutoutData, CutoutSchema } from "../element/cutout";
import { type PatchData, PatchSchema } from "../element/patch";

/**
 * Groups elements dealing with modifications of document pages.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.paperModLike.html
 */
export const ModelPaperModLikeSchema: v.GenericSchema<ModelPaperModLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * A cutout is a section of a document sheet that has been removed and is now missing.
			 * @see https://music-encoding.org/guidelines/v5/elements/cutout.html
			 */
			cutout: v.optional(v.union([v.array(CutoutSchema), CutoutSchema])),
			/**
			 * Describes a physical writing surface attached to the original document.
			 * @see https://music-encoding.org/guidelines/v5/elements/patch.html
			 */
			patch: v.optional(v.union([v.array(PatchSchema), PatchSchema])),
		}),
	);

export type ModelPaperModLikeData = {
	cutout?: CutoutData | CutoutData[];
	patch?: PatchData | PatchData[];
};
