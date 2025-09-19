import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrAuthorizedSchema,
	AttrBasicSchema,
	AttrBiblSchema,
	AttrClassedSchema,
	AttrFilingSchema,
	AttrLabelledSchema,
	AttrLangSchema,
	AttrLinkingSchema,
	AttrNNumberLikeSchema,
	AttrResponsibilitySchema,
	MacroTitlePartSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { TitlePartSchema } from ".";

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
export const TitleSchema = v.intersect([
	TitleBaseSchema,
	v.object({
		/**
		 * Reference to element titlePart
		 * @see https://music-encoding.org/guidelines/v5/elements/titlePart.html
		 */
		titlePart: v.optional(
			v.union([
				v.lazy(() => TitlePartSchema),
				v.array(v.lazy(() => TitlePartSchema)),
			]),
		),
	}),
	MacroTitlePartSchema,
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type TitleData = v.InferOutput<typeof TitleSchema>;
