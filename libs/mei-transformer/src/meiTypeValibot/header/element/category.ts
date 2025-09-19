import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrAuthorizedSchema } from "../../shared/attr/authorized";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDataPointingSchema } from "../../shared/attr/dataPointing";
import { type DescData, DescSchema } from "../../shared/element/desc";
import { type LabelData, LabelSchema } from "../../shared/element/label";
import { type AltIdData, AltIdSchema } from "../element/altId";
import { type CatRelData, CatRelSchema } from "../element/catRel";

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
export const CategorySchema: v.GenericSchema<CategoryData> = v.lazy(() =>
	v.intersect([
		CategoryBaseSchema,
		v.object({
			/**
			 * Reference to element altId
			 * @see https://music-encoding.org/guidelines/v5/elements/altId.html
			 */
			altId: v.optional(v.union([v.array(AltIdSchema), AltIdSchema])),
			/**
			 * Reference to element category
			 * @see https://music-encoding.org/guidelines/v5/elements/category.html
			 */
			category: v.optional(v.union([v.array(CategorySchema), CategorySchema])),
			/**
			 * Reference to element catRel
			 * @see https://music-encoding.org/guidelines/v5/elements/catRel.html
			 */
			catRel: v.optional(v.union([v.array(CatRelSchema), CatRelSchema])),
			/**
			 * Reference to element desc
			 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
			 */
			desc: v.optional(v.union([v.array(DescSchema), DescSchema])),
			/**
			 * Reference to element label
			 * @see https://music-encoding.org/guidelines/v5/elements/label.html
			 */
			label: v.optional(v.union([v.array(LabelSchema), LabelSchema])),
		}),
	]),
);

export type CategoryData = CategoryBaseData & {
	altId?: AltIdData | AltIdData[];
	category?: CategoryData | CategoryData[];
	catRel?: CatRelData | CatRelData[];
	desc?: DescData | DescData[];
	label?: LabelData | LabelData[];
};
