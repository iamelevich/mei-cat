import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrEditSchema } from "../../edittrans/attr/edit";
import { AttrAuthorizedSchema } from "../../shared/attr/authorized";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { type AnnotData, AnnotSchema } from "../../shared/element/annot";
import {
	type ModelHeadLikeData,
	ModelHeadLikeSchema,
} from "../../shared/model/headLike";
import { AttrPerfResBasicSchema } from "../attr/perfRes.basic";
import { type PerfResData, PerfResSchema } from "./perfRes";

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
export const PerfResListSchema: v.GenericSchema<PerfResListData> = v.lazy(() =>
	v.intersect([
		PerfResListBaseSchema,
		v.object({
			/**
			 * Reference to element annot
			 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
			 */
			annot: v.optional(v.union([v.array(AnnotSchema), AnnotSchema])),
			/**
			 * Reference to element perfRes
			 * @see https://music-encoding.org/guidelines/v5/elements/perfRes.html
			 */
			perfRes: v.optional(v.union([v.array(PerfResSchema), PerfResSchema])),
			/**
			 * Reference to element perfResList
			 * @see https://music-encoding.org/guidelines/v5/elements/perfResList.html
			 */
			perfResList: v.optional(
				v.union([v.array(PerfResListSchema), PerfResListSchema]),
			),
		}),
		ModelHeadLikeSchema,
	]),
);

export type PerfResListData = PerfResListBaseData & {
	annot?: AnnotData | AnnotData[];
	perfRes?: PerfResData | PerfResData[];
	perfResList?: PerfResListData | PerfResListData[];
} & ModelHeadLikeData;
