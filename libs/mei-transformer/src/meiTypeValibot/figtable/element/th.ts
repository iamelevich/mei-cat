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
export const ThSchema = v.intersect([
	ThBaseSchema,
	ModelEditLikeSchema,
	ModelTextComponentLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type ThData = v.InferOutput<typeof ThSchema>;
