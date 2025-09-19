import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrEditSchema } from "../../edittrans";
import {
	type AnnotData,
	AnnotSchema,
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	type ModelHeadLikeData,
	ModelHeadLikeSchema,
} from "../../shared";
import { AttrPerfResBasicSchema } from "..";
import { type PerfResData, PerfResSchema } from ".";

/**
 * Base schema with attribute, to simplify types for PerfResListSchema
 */
const PerfResListBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrLangSchema.entries,
	...AttrPerfResBasicSchema.entries,
});

type PerfResListBaseData = v.InferOutput<typeof PerfResListBaseSchema>;

/**
 * Several instrumental or vocal resources treated as a group.
 * @see https://music-encoding.org/guidelines/v5/elements/perfResList.html
 */
export const PerfResListSchema: v.GenericSchema<PerfResListData> = v.intersect([
	PerfResListBaseSchema,
	v.object({
		/**
		 * Reference to element annot
		 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
		 */
		annot: v.optional(
			v.union([v.lazy(() => AnnotSchema), v.array(v.lazy(() => AnnotSchema))]),
		),
		/**
		 * Reference to element perfRes
		 * @see https://music-encoding.org/guidelines/v5/elements/perfRes.html
		 */
		perfRes: v.optional(
			v.union([
				v.lazy(() => PerfResSchema),
				v.array(v.lazy(() => PerfResSchema)),
			]),
		),
		/**
		 * Reference to element perfResList
		 * @see https://music-encoding.org/guidelines/v5/elements/perfResList.html
		 */
		perfResList: v.optional(
			v.union([
				v.lazy(() => PerfResListSchema),
				v.array(v.lazy(() => PerfResListSchema)),
			]),
		),
	}),
	ModelHeadLikeSchema,
]);

export type PerfResListData = PerfResListBaseData & {
	annot?: AnnotData | AnnotData[];
	perfRes?: PerfResData | PerfResData[];
	perfResList?: PerfResListData | PerfResListData[];
} & ModelHeadLikeData;
