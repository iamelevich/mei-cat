import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { SpSchema } from "../../drama";
import { AttrFacsimileSchema } from "../../facsimile";
import { ModelFigureLikeSchema } from "../../figtable";
import { ModelDivLikeSchema } from "../../text";
import {
	AttrBasicSchema,
	AttrClassedSchema,
	AttrLabelledSchema,
	AttrLangSchema,
	AttrLinkingSchema,
	AttrMetadataPointingSchema,
	AttrNNumberLikeSchema,
	AttrResponsibilitySchema,
	ModelHeadLikeSchema,
	ModelMilestoneLikeTextSchema,
	ModelTextComponentLikeSchema,
} from "..";

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
export const DivSchema = v.intersect([
	DivBaseSchema,
	v.object({
		/**
		 * Reference to element sp
		 * @see https://music-encoding.org/guidelines/v5/elements/sp.html
		 */
		sp: v.optional(
			v.union([v.lazy(() => SpSchema), v.array(v.lazy(() => SpSchema))]),
		),
	}),
	ModelDivLikeSchema,
	ModelFigureLikeSchema,
	ModelHeadLikeSchema,
	ModelMilestoneLikeTextSchema,
	ModelTextComponentLikeSchema,
]);

export type DivData = v.InferOutput<typeof DivSchema>;
