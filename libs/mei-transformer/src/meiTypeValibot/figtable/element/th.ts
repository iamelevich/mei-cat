import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrXySchema,
	ModelTextComponentLikeSchema,
	ModelTextPhraseLikeSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrTabularSchema } from "..";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";

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
