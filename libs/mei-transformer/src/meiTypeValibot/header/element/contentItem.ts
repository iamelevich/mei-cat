import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	ModelTextComponentLikeSchema,
	ModelTextPhraseLikeSchema,
} from "../../shared";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";

/**
 * Base schema with attribute, to simplify types for ContentItemSchema
 */
const ContentItemBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a single entry within a content description element.
 * @see https://music-encoding.org/guidelines/v5/elements/contentItem.html
 */
export const ContentItemSchema = v.intersect([
	ContentItemBaseSchema,
	ModelEditLikeSchema,
	ModelTextComponentLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type ContentItemData = v.InferOutput<typeof ContentItemSchema>;
