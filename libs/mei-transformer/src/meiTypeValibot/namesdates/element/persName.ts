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
import { ModelPersNamePartSchema } from "..";

/**
 * Base schema with attribute, to simplify types for PersNameSchema
 */
const PersNameBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrNameSchema.entries,
});

/**
 * Designation for an individual, including any or all of that individual's forenames, surnames, honorific titles, and added names.
 * @see https://music-encoding.org/guidelines/v5/elements/persName.html
 */
export const PersNameSchema = v.intersect([
	PersNameBaseSchema,
	ModelEditLikeSchema,
	ModelPersNamePartSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type PersNameData = v.InferOutput<typeof PersNameSchema>;
