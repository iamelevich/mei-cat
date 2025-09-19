import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrAuthorizedSchema,
	AttrBasicSchema,
	AttrBiblSchema,
	AttrLabelledSchema,
	AttrLinkingSchema,
	AttrNNumberLikeSchema,
	AttrResponsibilitySchema,
	DescSchema,
	LabelSchema,
} from "../../shared";

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
export const CatRelSchema = v.intersect([
	CatRelBaseSchema,
	v.object({
		/**
		 * Reference to element desc
		 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
		 */
		desc: v.optional(
			v.union([v.lazy(() => DescSchema), v.array(v.lazy(() => DescSchema))]),
		),
		/**
		 * Reference to element label
		 * @see https://music-encoding.org/guidelines/v5/elements/label.html
		 */
		label: v.optional(
			v.union([v.lazy(() => LabelSchema), v.array(v.lazy(() => LabelSchema))]),
		),
	}),
]);

export type CatRelData = v.InferOutput<typeof CatRelSchema>;
