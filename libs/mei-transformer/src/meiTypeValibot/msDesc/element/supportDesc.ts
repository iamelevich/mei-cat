import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	HeadSchema,
	ModelTextPhraseLikeLimitedSchema,
	PSchema,
} from "../../shared";
import { CollationSchema, FoliationSchema, SupportSchema } from ".";
import { ConditionSchema } from "../../header";

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
export const SupportDescSchema = v.intersect([
	SupportDescBaseSchema,
	v.object({
		/**
		 * Reference to element collation
		 * @see https://music-encoding.org/guidelines/v5/elements/collation.html
		 */
		collation: v.optional(
			v.union([
				v.lazy(() => CollationSchema),
				v.array(v.lazy(() => CollationSchema)),
			]),
		),
		/**
		 * Reference to element condition
		 * @see https://music-encoding.org/guidelines/v5/elements/condition.html
		 */
		condition: v.optional(
			v.union([
				v.lazy(() => ConditionSchema),
				v.array(v.lazy(() => ConditionSchema)),
			]),
		),
		/**
		 * Reference to element foliation
		 * @see https://music-encoding.org/guidelines/v5/elements/foliation.html
		 */
		foliation: v.optional(
			v.union([
				v.lazy(() => FoliationSchema),
				v.array(v.lazy(() => FoliationSchema)),
			]),
		),
		/**
		 * Reference to element head
		 * @see https://music-encoding.org/guidelines/v5/elements/head.html
		 */
		head: v.optional(
			v.union([v.lazy(() => HeadSchema), v.array(v.lazy(() => HeadSchema))]),
		),
		/**
		 * Reference to element p
		 * @see https://music-encoding.org/guidelines/v5/elements/p.html
		 */
		p: v.optional(
			v.union([v.lazy(() => PSchema), v.array(v.lazy(() => PSchema))]),
		),
		/**
		 * Reference to element support
		 * @see https://music-encoding.org/guidelines/v5/elements/support.html
		 */
		support: v.optional(
			v.union([
				v.lazy(() => SupportSchema),
				v.array(v.lazy(() => SupportSchema)),
			]),
		),
	}),
	ModelTextPhraseLikeLimitedSchema,
]);

export type SupportDescData = v.InferOutput<typeof SupportDescSchema>;
