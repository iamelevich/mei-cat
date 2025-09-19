import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	DescSchema,
	type DescData,
	ModelBiblLikeSchema,
	type ModelBiblLikeData,
	ModelHeadLikeSchema,
	type ModelHeadLikeData,
} from "../../shared";
import { CategorySchema, type CategoryData } from ".";

/**
 * Base schema with attribute, to simplify types for TaxonomySchema
 */
const TaxonomyBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
});

type TaxonomyBaseData = v.InferOutput<typeof TaxonomyBaseSchema>;

/**
 * Defines a typology either implicitly, by means of a bibliographic citation, or explicitly by a structured taxonomy.
 * @see https://music-encoding.org/guidelines/v5/elements/taxonomy.html
 */
export const TaxonomySchema: v.GenericSchema<TaxonomyData> = v.intersect([
	TaxonomyBaseSchema,
	v.object({
		/**
		 * Reference to element category
		 * @see https://music-encoding.org/guidelines/v5/elements/category.html
		 */
		category: v.optional(
			v.union([
				v.lazy(() => CategorySchema),
				v.array(v.lazy(() => CategorySchema)),
			]),
		),
		/**
		 * Reference to element desc
		 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
		 */
		desc: v.optional(
			v.union([v.lazy(() => DescSchema), v.array(v.lazy(() => DescSchema))]),
		),
		/**
		 * Reference to element taxonomy
		 * @see https://music-encoding.org/guidelines/v5/elements/taxonomy.html
		 */
		taxonomy: v.optional(
			v.union([
				v.lazy(() => TaxonomySchema),
				v.array(v.lazy(() => TaxonomySchema)),
			]),
		),
	}),
	ModelBiblLikeSchema,
	ModelHeadLikeSchema,
]);

export type TaxonomyData = TaxonomyBaseData & {
	category?: CategoryData | CategoryData[];
	desc?: DescData | DescData[];
	taxonomy?: TaxonomyData | TaxonomyData[];
} & ModelBiblLikeData &
	ModelHeadLikeData;
