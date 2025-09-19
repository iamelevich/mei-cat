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

/**
 * Base schema with attribute, to simplify types for PeriodNameSchema
 */
const PeriodNameBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrNameSchema.entries,
});

/**
 * A label that describes a period of time, such as 'Baroque' or '3rd Style period'.
 * @see https://music-encoding.org/guidelines/v5/elements/periodName.html
 */
export const PeriodNameSchema = v.lazy(() =>
	v.intersect([
		PeriodNameBaseSchema,
		ModelEditLikeSchema,
		ModelTextPhraseLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type PeriodNameData = v.InferOutput<typeof PeriodNameSchema>;
