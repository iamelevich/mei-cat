import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	type ModelBiblLikeData,
	ModelBiblLikeSchema,
	type ModelHeadLikeData,
	ModelHeadLikeSchema,
} from "..";
import { type LabelData, LabelSchema } from ".";

/**
 * Base schema with attribute, to simplify types for BiblListSchema
 */
const BiblListBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

type BiblListBaseData = v.InferOutput<typeof BiblListBaseSchema>;

/**
 * List of bibliographic references.
 * @see https://music-encoding.org/guidelines/v5/elements/biblList.html
 */
export const BiblListSchema: v.GenericSchema<BiblListData> = v.intersect([
	BiblListBaseSchema,
	v.object({
		/**
		 * Reference to element biblList
		 * @see https://music-encoding.org/guidelines/v5/elements/biblList.html
		 */
		biblList: v.optional(
			v.union([
				v.lazy(() => BiblListSchema),
				v.array(v.lazy(() => BiblListSchema)),
			]),
		),
		/**
		 * Reference to element label
		 * @see https://music-encoding.org/guidelines/v5/elements/label.html
		 */
		label: v.optional(
			v.union([v.lazy(() => LabelSchema), v.array(v.lazy(() => LabelSchema))]),
		),
	}),
	ModelBiblLikeSchema,
	ModelHeadLikeSchema,
]);

export type BiblListData = BiblListBaseData & {
	biblList?: BiblListData | BiblListData[];
	label?: LabelData | LabelData[];
} & ModelBiblLikeData &
	ModelHeadLikeData;
