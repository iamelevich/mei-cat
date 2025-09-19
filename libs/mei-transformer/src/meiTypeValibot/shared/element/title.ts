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
import { AttrNNumberLikeSchema } from "../attr/nNumberLike";
import { AttrResponsibilitySchema } from "../attr/responsibility";
import { TitlePartSchema } from "../element/titlePart";
import { MacroTitlePartSchema } from "../macro/titlePart";

/**
 * Base schema with attribute, to simplify types for TitleSchema
 */
const TitleBaseSchema = v.object({
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
	...AttrNNumberLikeSchema.entries,
	...AttrResponsibilitySchema.entries,

	// Direct attributes
	/**
	 * Indicates the bibliographic level of the title.
	 */
	"@level": v.optional(v.string()),
	/**
	 * Characterizes the title in some sense, using any convenient classification scheme or typology that employs single-token labels.
	 */
	"@type": v.optional(v.string()),
});

/**
 * Title of a bibliographic entity.
 * @see https://music-encoding.org/guidelines/v5/elements/title.html
 */
export const TitleSchema = v.lazy(() =>
	v.intersect([
		TitleBaseSchema,
		v.object({
			/**
			 * Reference to element titlePart
			 * @see https://music-encoding.org/guidelines/v5/elements/titlePart.html
			 */
			titlePart: v.optional(
				v.union([TitlePartSchema, v.array(TitlePartSchema)]),
			),
		}),
		MacroTitlePartSchema,
		ModelEditLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type TitleData = v.InferOutput<typeof TitleSchema>;
