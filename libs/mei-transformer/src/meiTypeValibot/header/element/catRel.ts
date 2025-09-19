import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrAuthorizedSchema } from "../../shared/attr/authorized";
import { AttrBasicSchema } from "../../shared/attr/basic";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrLabelledSchema } from "../../shared/attr/labelled";
import { AttrLinkingSchema } from "../../shared/attr/linking";
import { AttrNNumberLikeSchema } from "../../shared/attr/nNumberLike";
import { AttrResponsibilitySchema } from "../../shared/attr/responsibility";
import { DescSchema } from "../../shared/element/desc";
import { LabelSchema } from "../../shared/element/label";

/**
 * Base schema with attribute, to simplify types for CatRelSchema
 */
const CatRelBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBasicSchema.entries,
	...AttrBiblSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrNNumberLikeSchema.entries,
	...AttrResponsibilitySchema.entries,

	// Direct attributes
	/**
	 * Provides a description of the relationship between the current and the target categories.
	 */
	"@type": v.optional(v.string()),
});

/**
 * Contains the name, i.e., label, of a related category.
 * @see https://music-encoding.org/guidelines/v5/elements/catRel.html
 */
export const CatRelSchema = v.lazy(() =>
	v.intersect([
		CatRelBaseSchema,
		v.object({
			/**
			 * Reference to element desc
			 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
			 */
			desc: v.optional(v.union([DescSchema, v.array(DescSchema)])),
			/**
			 * Reference to element label
			 * @see https://music-encoding.org/guidelines/v5/elements/label.html
			 */
			label: v.optional(v.union([LabelSchema, v.array(LabelSchema)])),
		}),
	]),
);

export type CatRelData = v.InferOutput<typeof CatRelSchema>;
