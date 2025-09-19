import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ConditionSchema } from "../../header/element/condition";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { HeadSchema } from "../../shared/element/head";
import { PSchema } from "../../shared/element/p";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { CollationSchema } from "../element/collation";
import { FoliationSchema } from "../element/foliation";
import { SupportSchema } from "../element/support";

/**
 * Base schema with attribute, to simplify types for SupportDescSchema
 */
const SupportDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,

	// Direct attributes
	/**
	 * Short, project-defined name for the material composing the majority of the support.
	 */
	"@material": v.optional(v.string()),
});

/**
 * Groups elements describing the physical support material of an item.
 * @see https://music-encoding.org/guidelines/v5/elements/supportDesc.html
 */
export const SupportDescSchema = v.lazy(() =>
	v.intersect([
		SupportDescBaseSchema,
		v.object({
			/**
			 * Reference to element collation
			 * @see https://music-encoding.org/guidelines/v5/elements/collation.html
			 */
			collation: v.optional(
				v.union([CollationSchema, v.array(CollationSchema)]),
			),
			/**
			 * Reference to element condition
			 * @see https://music-encoding.org/guidelines/v5/elements/condition.html
			 */
			condition: v.optional(
				v.union([ConditionSchema, v.array(ConditionSchema)]),
			),
			/**
			 * Reference to element foliation
			 * @see https://music-encoding.org/guidelines/v5/elements/foliation.html
			 */
			foliation: v.optional(
				v.union([FoliationSchema, v.array(FoliationSchema)]),
			),
			/**
			 * Reference to element head
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: v.optional(v.union([HeadSchema, v.array(HeadSchema)])),
			/**
			 * Reference to element p
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: v.optional(v.union([PSchema, v.array(PSchema)])),
			/**
			 * Reference to element support
			 * @see https://music-encoding.org/guidelines/v5/elements/support.html
			 */
			support: v.optional(v.union([SupportSchema, v.array(SupportSchema)])),
		}),
		ModelTextPhraseLikeLimitedSchema,
	]),
);

export type SupportDescData = v.InferOutput<typeof SupportDescSchema>;
