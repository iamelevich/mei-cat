import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrXySchema } from "../../shared/attr/xy";
import { ModelTextComponentLikeSchema } from "../../shared/model/textComponentLike";
import { ModelTextPhraseLikeSchema } from "../../shared/model/textPhraseLike";
import { AttrTabularSchema } from "../attr/tabular";

/**
 * Base schema with attribute, to simplify types for ThSchema
 */
const ThBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrTabularSchema.entries,
	...AttrXySchema.entries,
});

/**
 * Designates a table cell containing column or row heading information as opposed to one containing data.
 * @see https://music-encoding.org/guidelines/v5/elements/th.html
 */
export const ThSchema = v.lazy(() =>
	v.intersect([
		ThBaseSchema,
		ModelEditLikeSchema,
		ModelTextComponentLikeSchema,
		ModelTextPhraseLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type ThData = v.InferOutput<typeof ThSchema>;
