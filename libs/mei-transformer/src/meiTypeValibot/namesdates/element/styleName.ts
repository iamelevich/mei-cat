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
 * Base schema with attribute, to simplify types for StyleNameSchema
 */
const StyleNameBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrNameSchema.entries,
});

/**
 * A label for a characteristic style of writing or performance, such as 'bebop' or 'rock-n-roll'.
 * @see https://music-encoding.org/guidelines/v5/elements/styleName.html
 */
export const StyleNameSchema = v.lazy(() =>
	v.intersect([
		StyleNameBaseSchema,
		ModelEditLikeSchema,
		ModelTextPhraseLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type StyleNameData = v.InferOutput<typeof StyleNameSchema>;
