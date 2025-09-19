import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrEditSchema } from "../../edittrans/attr/edit";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBasicSchema } from "../attr/basic";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrClassedSchema } from "../attr/classed";
import { AttrLabelledSchema } from "../attr/labelled";
import { AttrLangSchema } from "../attr/lang";
import { AttrLinkingSchema } from "../attr/linking";
import { AttrNameSchema } from "../attr/name";
import { AttrNNumberLikeSchema } from "../attr/nNumberLike";
import { AttrResponsibilitySchema } from "../attr/responsibility";
import { ModelTextPhraseLikeSchema } from "../model/textPhraseLike";

/**
 * Base schema with attribute, to simplify types for NameSchema
 */
const NameBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrBiblSchema.entries,
	...AttrClassedSchema.entries,
	...AttrEditSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLangSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrNNumberLikeSchema.entries,
	...AttrNameSchema.entries,
	...AttrResponsibilitySchema.entries,

	// Direct attributes
	/**
	 * Characterizes the name in some sense, using any convenient classification scheme or typology that employs single-token labels.
	 */
	"@type": v.optional(v.string()),
});

/**
 * Proper noun or noun phrase.
 * @see https://music-encoding.org/guidelines/v5/elements/name.html
 */
export const NameSchema = v.lazy(() =>
	v.intersect([
		NameBaseSchema,
		ModelEditLikeSchema,
		ModelTextPhraseLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type NameData = v.InferOutput<typeof NameSchema>;
