import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrNameSchema,
	ModelTextPhraseLikeSchema,
} from "../../shared";
import {
	AttrEditSchema,
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for GeogNameSchema
 */
const GeogNameBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrNameSchema.entries,
});

/**
 * The proper noun designation for a place, natural feature, or political jurisdiction.
 * @see https://music-encoding.org/guidelines/v5/elements/geogName.html
 */
export const GeogNameSchema = v.intersect([
	GeogNameBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type GeogNameData = v.InferOutput<typeof GeogNameSchema>;
