import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrEditSchema } from "../../edittrans/attr/edit";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrNameSchema } from "../../shared/attr/name";
import { ModelTextPhraseLikeSchema } from "../../shared/model/textPhraseLike";
import { ModelPersNamePartSchema } from "../model/persNamePart";

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
export const PersNameSchema = v.lazy(() =>
	v.intersect([
		PersNameBaseSchema,
		ModelEditLikeSchema,
		ModelPersNamePartSchema,
		ModelTextPhraseLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type PersNameData = v.InferOutput<typeof PersNameSchema>;
