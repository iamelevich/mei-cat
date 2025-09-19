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
 * Base schema with attribute, to simplify types for GenNameSchema
 */
const GenNameBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrNameSchema.entries,
});

/**
 * Contains a name component used to distinguish otherwise similar names on the basis of the relative ages or generations of the persons named.
 * @see https://music-encoding.org/guidelines/v5/elements/genName.html
 */
export const GenNameSchema = v.intersect([
	GenNameBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type GenNameData = v.InferOutput<typeof GenNameSchema>;
