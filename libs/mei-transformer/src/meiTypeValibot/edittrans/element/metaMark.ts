import * as v from "valibot";
import { AttrMetaMarkAnlSchema } from "../../analytical/attr/metaMark.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrMetaMarkGesSchema } from "../../gestural/attr/metaMark.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrPointingSchema } from "../../shared/attr/pointing";
import { ModelSectionLikeSchema } from "../../shared/model/sectionLike";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { AttrMetaMarkVisSchema } from "../../visual/attr/metaMark.vis";
import { AttrMetaMarkLogSchema } from "../attr/metaMark.log";
import { ModelEditLikeSchema } from "../model/editLike";
import { ModelTranscriptionLikeSchema } from "../model/transcriptionLike";

/**
 * Base schema with attribute, to simplify types for MetaMarkSchema
 */
const MetaMarkBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrMetaMarkAnlSchema.entries,
	...AttrMetaMarkGesSchema.entries,
	...AttrMetaMarkLogSchema.entries,
	...AttrMetaMarkVisSchema.entries,
	...AttrPointingSchema.entries,

	// Direct attributes
	/**
	 * Describes the purpose of the metaMark.
	 */
	"@function": v.optional(v.string()),
});

/**
 * A graphical or textual statement with additional / explanatory information about the musical text. The textual consequences of this intervention are encoded independently via other means; that is, with elements such as <gi scheme="MEI">add</gi>, <gi scheme="MEI">del</gi>, etc.
 * @see https://music-encoding.org/guidelines/v5/elements/metaMark.html
 */
export const MetaMarkSchema = v.lazy(() =>
	v.intersect([
		MetaMarkBaseSchema,
		ModelEditLikeSchema,
		ModelSectionLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type MetaMarkData = v.InferOutput<typeof MetaMarkSchema>;
