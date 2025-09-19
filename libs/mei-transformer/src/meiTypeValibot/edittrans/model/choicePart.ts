import * as v from "valibot";
import {
	type ModelEditorialLikeData,
	ModelEditorialLikeSchema,
} from "../../shared/model/editorialLike";
import { type CorrData, CorrSchema } from "../element/corr";
import { type OrigData, OrigSchema } from "../element/orig";
import { type RegData, RegSchema } from "../element/reg";
import { type SicData, SicSchema } from "../element/sic";
import { type UnclearData, UnclearSchema } from "../element/unclear";
import { type ModelEditLikeData, ModelEditLikeSchema } from "../model/editLike";

/**
 * Groups elements that may appear as part of the content of a choice element.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.choicePart.html
 */
export const ModelChoicePartSchema: v.GenericSchema<ModelChoicePartData> =
	v.lazy(() =>
		v.intersect([
			v.object({
				/**
				 * Contains the correct form of an apparent erroneous passage.
				 * @see https://music-encoding.org/guidelines/v5/elements/corr.html
				 */
				corr: v.optional(v.union([v.array(CorrSchema), CorrSchema])),
				/**
				 * Contains material which is marked as following the original, rather than being normalized or corrected.
				 * @see https://music-encoding.org/guidelines/v5/elements/orig.html
				 */
				orig: v.optional(v.union([v.array(OrigSchema), OrigSchema])),
				/**
				 * Contains material which has been regularized or normalized in some sense.
				 * @see https://music-encoding.org/guidelines/v5/elements/reg.html
				 */
				reg: v.optional(v.union([v.array(RegSchema), RegSchema])),
				/**
				 * Contains apparently incorrect or inaccurate material.
				 * @see https://music-encoding.org/guidelines/v5/elements/sic.html
				 */
				sic: v.optional(v.union([v.array(SicSchema), SicSchema])),
				/**
				 * Contains material that cannot be transcribed with certainty because it is illegible or inaudible in the source.
				 * @see https://music-encoding.org/guidelines/v5/elements/unclear.html
				 */
				unclear: v.optional(v.union([v.array(UnclearSchema), UnclearSchema])),
			}),
			ModelEditLikeSchema,
			ModelEditorialLikeSchema,
		]),
	);

export type ModelChoicePartData = {
	corr?: CorrData | CorrData[];
	orig?: OrigData | OrigData[];
	reg?: RegData | RegData[];
	sic?: SicData | SicData[];
	unclear?: UnclearData | UnclearData[];
} & ModelEditLikeData &
	ModelEditorialLikeData;
