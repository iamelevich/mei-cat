import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBasicSchema,
	AttrBiblSchema,
	AttrClassedSchema,
	AttrLabelledSchema,
	AttrLangSchema,
	AttrLinkingSchema,
	AttrNNumberLikeSchema,
	AttrNameSchema,
	AttrResponsibilitySchema,
	ModelTextPhraseLikeSchema,
} from "..";
import {
	AttrEditSchema,
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";

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
export const NameSchema = v.intersect([
	NameBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type NameData = v.InferOutput<typeof NameSchema>;
