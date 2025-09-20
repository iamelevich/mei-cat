import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelSylLikeSchema } from "../../shared/model/sylLike";
import { ModelTextPhraseLikeSchema } from "../../shared/model/textPhraseLike";

/**
 * Base schema with attribute, to simplify types for LSchema
 */
const LBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,

	// Direct attributes
	/**
	 * Used to specify a rhythm for the lyric syllables that differs from that of the notes on the staff, <abbr>e.g.</abbr>, '4,4,4,4' when the rhythm of the notes is '4.,8,4.,8'.
	 */
	"@rhythm": v.optional(v.string()),
});

/**
 * Contains a single line of text within a line group.
 * @see https://music-encoding.org/guidelines/v5/elements/l.html
 */
export const LSchema = v.lazy(() =>
	v.intersect([
		LBaseSchema,
		ModelEditLikeSchema,
		ModelSylLikeSchema,
		ModelTextPhraseLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type LData = v.InferOutput<typeof LSchema>;
