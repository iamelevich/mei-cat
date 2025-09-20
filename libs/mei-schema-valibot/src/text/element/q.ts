import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBasicSchema } from "../../shared/attr/basic";
import { AttrClassedSchema } from "../../shared/attr/classed";
import { AttrLabelledSchema } from "../../shared/attr/labelled";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrLinkingSchema } from "../../shared/attr/linking";
import { AttrNNumberLikeSchema } from "../../shared/attr/nNumberLike";
import { AttrResponsibilitySchema } from "../../shared/attr/responsibility";
import { AttrTextRenditionSchema } from "../../shared/attr/textRendition";
import { ModelTextPhraseLikeSchema } from "../../shared/model/textPhraseLike";

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
export const QSchema = v.lazy(() =>
	v.intersect([QBaseSchema, ModelTextPhraseLikeSchema]),
);

export type QData = v.InferOutput<typeof QSchema>;
