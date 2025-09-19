import * as v from "valibot";
import {
	type CorrData,
	CorrSchema,
	type OrigData,
	OrigSchema,
	type RegData,
	RegSchema,
	type SicData,
	SicSchema,
	type UnclearData,
	UnclearSchema,
	type ModelEditLikeData,
	ModelEditLikeSchema,
} from "..";
import {
	type ModelEditorialLikeData,
	ModelEditorialLikeSchema,
} from "../../shared";

/**
 * Groups elements that may appear as part of the content of a choice element.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.choicePart.html
 */
export const ModelChoicePartSchema: v.GenericSchema<ModelChoicePartData> =
	v.intersect([
		v.object({
			/**
			 * Contains the correct form of an apparent erroneous passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/corr.html
			 */
			corr: v.optional(
				v.union([v.lazy(() => CorrSchema), v.array(v.lazy(() => CorrSchema))]),
			),
			/**
			 * Contains material which is marked as following the original, rather than being normalized or corrected.
			 * @see https://music-encoding.org/guidelines/v5/elements/orig.html
			 */
			orig: v.optional(
				v.union([v.lazy(() => OrigSchema), v.array(v.lazy(() => OrigSchema))]),
			),
			/**
			 * Contains material which has been regularized or normalized in some sense.
			 * @see https://music-encoding.org/guidelines/v5/elements/reg.html
			 */
			reg: v.optional(
				v.union([v.lazy(() => RegSchema), v.array(v.lazy(() => RegSchema))]),
			),
			/**
			 * Contains apparently incorrect or inaccurate material.
			 * @see https://music-encoding.org/guidelines/v5/elements/sic.html
			 */
			sic: v.optional(
				v.union([v.lazy(() => SicSchema), v.array(v.lazy(() => SicSchema))]),
			),
			/**
			 * Contains material that cannot be transcribed with certainty because it is illegible or inaudible in the source.
			 * @see https://music-encoding.org/guidelines/v5/elements/unclear.html
			 */
			unclear: v.optional(
				v.union([
					v.lazy(() => UnclearSchema),
					v.array(v.lazy(() => UnclearSchema)),
				]),
			),
		}),
		ModelEditLikeSchema,
		ModelEditorialLikeSchema,
	]);

export type ModelChoicePartData = {
	corr?: CorrData | CorrData[];
	orig?: OrigData | OrigData[];
	reg?: RegData | RegData[];
	sic?: SicData | SicData[];
	unclear?: UnclearData | UnclearData[];
} & ModelEditLikeData &
	ModelEditorialLikeData;
