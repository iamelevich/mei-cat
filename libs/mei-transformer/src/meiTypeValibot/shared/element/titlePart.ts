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
	AttrNIntegerSchema,
	AttrResponsibilitySchema,
	MacroTitlePartSchema,
	ModelTitleLikeSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";

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
export const TitlePartSchema = v.intersect([
	TitlePartBaseSchema,
	MacroTitlePartSchema,
	ModelEditLikeSchema,
	ModelTitleLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type TitlePartData = v.InferOutput<typeof TitlePartSchema>;
