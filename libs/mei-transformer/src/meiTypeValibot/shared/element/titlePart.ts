import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrAuthorizedSchema } from "../attr/authorized";
import { AttrBasicSchema } from "../attr/basic";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrClassedSchema } from "../attr/classed";
import { AttrFilingSchema } from "../attr/filing";
import { AttrLabelledSchema } from "../attr/labelled";
import { AttrLangSchema } from "../attr/lang";
import { AttrLinkingSchema } from "../attr/linking";
import { AttrNIntegerSchema } from "../attr/nInteger";
import { AttrResponsibilitySchema } from "../attr/responsibility";
import { MacroTitlePartSchema } from "../macro/titlePart";
import { ModelTitleLikeSchema } from "../model/titleLike";

/**
 * Base schema with attribute, to simplify types for TitlePartSchema
 */
const TitlePartBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBasicSchema.entries,
	...AttrBiblSchema.entries,
	...AttrClassedSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrFilingSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLangSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrNIntegerSchema.entries,
	...AttrResponsibilitySchema.entries,

	// Direct attributes
	/**
	 * Characterizes this title component in some sense, using any convenient classification scheme or typology that employs single-token labels.
	 */
	"@type": v.optional(v.string()),
});

/**
 * Contains a subsection or division of the title of a bibliographic entity.
 * @see https://music-encoding.org/guidelines/v5/elements/titlePart.html
 */
export const TitlePartSchema = v.lazy(() =>
	v.intersect([
		TitlePartBaseSchema,
		MacroTitlePartSchema,
		ModelEditLikeSchema,
		ModelTitleLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type TitlePartData = v.InferOutput<typeof TitlePartSchema>;
