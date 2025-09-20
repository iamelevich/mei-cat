import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { SpSchema } from "../../drama/element/sp";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { ModelFigureLikeSchema } from "../../figtable/model/figureLike";
import { ModelDivLikeSchema } from "../../text/model/divLike";
import { AttrBasicSchema } from "../attr/basic";
import { AttrClassedSchema } from "../attr/classed";
import { AttrLabelledSchema } from "../attr/labelled";
import { AttrLangSchema } from "../attr/lang";
import { AttrLinkingSchema } from "../attr/linking";
import { AttrMetadataPointingSchema } from "../attr/metadataPointing";
import { AttrNNumberLikeSchema } from "../attr/nNumberLike";
import { AttrResponsibilitySchema } from "../attr/responsibility";
import { ModelHeadLikeSchema } from "../model/headLike";
import { ModelMilestoneLikeTextSchema } from "../model/milestoneLike.text";
import { ModelTextComponentLikeSchema } from "../model/textComponentLike";

/**
 * Base schema with attribute, to simplify types for DivSchema
 */
const DivBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrClassedSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLangSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrNNumberLikeSchema.entries,
	...AttrResponsibilitySchema.entries,

	// Direct attributes
	/**
	 * Characterizes the textual division in some sense, using any convenient classification scheme or typology that employs single-token labels.
	 */
	"@type": v.optional(v.string()),
});

/**
 * Major structural division of text, such as a preface, chapter or section.
 * @see https://music-encoding.org/guidelines/v5/elements/div.html
 */
export const DivSchema = v.lazy(() =>
	v.intersect([
		DivBaseSchema,
		v.object({
			/**
			 * Reference to element sp
			 * @see https://music-encoding.org/guidelines/v5/elements/sp.html
			 */
			sp: v.optional(v.union([v.array(SpSchema), SpSchema])),
		}),
		ModelDivLikeSchema,
		ModelFigureLikeSchema,
		ModelHeadLikeSchema,
		ModelMilestoneLikeTextSchema,
		ModelTextComponentLikeSchema,
	]),
);

export type DivData = v.InferOutput<typeof DivSchema>;
