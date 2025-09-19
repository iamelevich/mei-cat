import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBasicSchema,
	AttrClassedSchema,
	AttrLabelledSchema,
	AttrLangSchema,
	AttrLinkingSchema,
	AttrNNumberLikeSchema,
	AttrResponsibilitySchema,
	AttrTextRenditionSchema,
	ModelTextPhraseLikeSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for QSchema
 */
const QBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrClassedSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLangSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrNNumberLikeSchema.entries,
	...AttrResponsibilitySchema.entries,
	...AttrTextRenditionSchema.entries,

	// Direct attributes
	/**
	 * Representation of speech.
	 */
	"@type": v.optional(v.string()),
});

/**
 * Contains material which is distinguished from the surrounding phrase-level text using quotation marks or a similar method. Use <gi scheme="MEI">quote</gi> for block-level quotations.
 * @see https://music-encoding.org/guidelines/v5/elements/q.html
 */
export const QSchema = v.intersect([QBaseSchema, ModelTextPhraseLikeSchema]);

export type QData = v.InferOutput<typeof QSchema>;
