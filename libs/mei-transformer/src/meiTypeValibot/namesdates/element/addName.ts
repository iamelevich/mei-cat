import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrEditSchema,
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrNameSchema,
	ModelTextPhraseLikeSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for AddNameSchema
 */
const AddNameBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrNameSchema.entries,
});

/**
 * Contains an additional name component, such as a nickname, epithet, or alias, or any other descriptive phrase used within a personal name.
 * @see https://music-encoding.org/guidelines/v5/elements/addName.html
 */
export const AddNameSchema = v.intersect([
	AddNameBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type AddNameData = v.InferOutput<typeof AddNameSchema>;
