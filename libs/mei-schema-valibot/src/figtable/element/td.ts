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
 * Base schema with attribute, to simplify types for TdSchema
 */
const TdBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrTabularSchema.entries,
	...AttrXySchema.entries,
});

/**
 * Designates a table cell that contains data as opposed to a cell that contains column or row heading information.
 * @see https://music-encoding.org/guidelines/v5/elements/td.html
 */
export const TdSchema = v.lazy(() =>
	v.intersect([
		TdBaseSchema,
		ModelEditLikeSchema,
		ModelTextComponentLikeSchema,
		ModelTextPhraseLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type TdData = v.InferOutput<typeof TdSchema>;
