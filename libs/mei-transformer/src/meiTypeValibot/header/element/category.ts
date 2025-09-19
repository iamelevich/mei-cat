import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDataPointingSchema,
	DescSchema,
	type DescData,
	LabelSchema,
	type LabelData,
} from "../../shared";
import { AltIdSchema, type AltIdData, CatRelSchema, type CatRelData } from ".";

/**
 * Base schema with attribute, to simplify types for CategorySchema
 */
const CategoryBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
});

type CategoryBaseData = v.InferOutput<typeof CategoryBaseSchema>;

/**
 * Contains an individual descriptive category in a user-defined taxonomy, possibly nested within a superordinate category.
 * @see https://music-encoding.org/guidelines/v5/elements/category.html
 */
export const CategorySchema: v.GenericSchema<CategoryData> = v.intersect([
	CategoryBaseSchema,
	v.object({
		/**
		 * Reference to element altId
		 * @see https://music-encoding.org/guidelines/v5/elements/altId.html
		 */
		altId: v.optional(
			v.union([v.lazy(() => AltIdSchema), v.array(v.lazy(() => AltIdSchema))]),
		),
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
		 * Reference to element catRel
		 * @see https://music-encoding.org/guidelines/v5/elements/catRel.html
		 */
		catRel: v.optional(
			v.union([
				v.lazy(() => CatRelSchema),
				v.array(v.lazy(() => CatRelSchema)),
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
		 * Reference to element label
		 * @see https://music-encoding.org/guidelines/v5/elements/label.html
		 */
		label: v.optional(
			v.union([v.lazy(() => LabelSchema), v.array(v.lazy(() => LabelSchema))]),
		),
	}),
]);

export type CategoryData = CategoryBaseData & {
	altId?: AltIdData | AltIdData[];
	category?: CategoryData | CategoryData[];
	catRel?: CatRelData | CatRelData[];
	desc?: DescData | DescData[];
	label?: LabelData | LabelData[];
};
