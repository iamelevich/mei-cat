import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	ModelSylLikeSchema,
	ModelTextPhraseLikeSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";

/**
 * Base schema with attribute, to simplify types for SegSchema
 */
const SegBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * represents any segmentation of text below the "text component" level.
 * @see https://music-encoding.org/guidelines/v5/elements/seg.html
 */
export const SegSchema = v.intersect([
	SegBaseSchema,
	ModelEditLikeSchema,
	ModelSylLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type SegData = v.InferOutput<typeof SegSchema>;
