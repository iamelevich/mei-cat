import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrXySchema,
	ModelTextComponentLikeSchema,
	ModelTextPhraseLikeSchema,
} from "../../shared";
import { AttrTabularSchema } from "..";

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
export const TdSchema = v.intersect([
	TdBaseSchema,
	ModelEditLikeSchema,
	ModelTextComponentLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type TdData = v.InferOutput<typeof TdSchema>;
