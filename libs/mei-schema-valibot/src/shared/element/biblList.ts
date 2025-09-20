import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { type ModelBiblLikeData, ModelBiblLikeSchema } from "../model/biblLike";
import { type ModelHeadLikeData, ModelHeadLikeSchema } from "../model/headLike";
import { type LabelData, LabelSchema } from "./label";

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
export const BiblListSchema: v.GenericSchema<BiblListData> = v.lazy(() =>
	v.intersect([
		BiblListBaseSchema,
		v.object({
			/**
			 * Reference to element biblList
			 * @see https://music-encoding.org/guidelines/v5/elements/biblList.html
			 */
			biblList: v.optional(v.union([v.array(BiblListSchema), BiblListSchema])),
			/**
			 * Reference to element label
			 * @see https://music-encoding.org/guidelines/v5/elements/label.html
			 */
			label: v.optional(v.union([v.array(LabelSchema), LabelSchema])),
		}),
		ModelBiblLikeSchema,
		ModelHeadLikeSchema,
	]),
);

export type BiblListData = BiblListBaseData & {
	biblList?: BiblListData | BiblListData[];
	label?: LabelData | LabelData[];
} & ModelBiblLikeData &
	ModelHeadLikeData;
