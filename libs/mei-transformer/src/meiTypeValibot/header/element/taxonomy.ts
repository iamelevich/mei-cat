import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { type DescData, DescSchema } from "../../shared/element/desc";
import {
	type ModelBiblLikeData,
	ModelBiblLikeSchema,
} from "../../shared/model/biblLike";
import {
	type ModelHeadLikeData,
	ModelHeadLikeSchema,
} from "../../shared/model/headLike";
import { type CategoryData, CategorySchema } from "../element/category";

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
export const TaxonomySchema: v.GenericSchema<TaxonomyData> = v.lazy(() =>
	v.intersect([
		TaxonomyBaseSchema,
		v.object({
			/**
			 * Reference to element category
			 * @see https://music-encoding.org/guidelines/v5/elements/category.html
			 */
			category: v.optional(v.union([v.array(CategorySchema), CategorySchema])),
			/**
			 * Reference to element desc
			 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
			 */
			desc: v.optional(v.union([v.array(DescSchema), DescSchema])),
			/**
			 * Reference to element taxonomy
			 * @see https://music-encoding.org/guidelines/v5/elements/taxonomy.html
			 */
			taxonomy: v.optional(v.union([v.array(TaxonomySchema), TaxonomySchema])),
		}),
		ModelBiblLikeSchema,
		ModelHeadLikeSchema,
	]),
);

export type TaxonomyData = TaxonomyBaseData & {
	category?: CategoryData | CategoryData[];
	desc?: DescData | DescData[];
	taxonomy?: TaxonomyData | TaxonomyData[];
} & ModelBiblLikeData &
	ModelHeadLikeData;
