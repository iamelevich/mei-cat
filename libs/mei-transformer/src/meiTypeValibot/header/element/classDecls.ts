import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	ModelHeadLikeSchema,
} from "../../shared";
import { TaxonomySchema } from ".";

/**
 * Base schema with attribute, to simplify types for ClassDeclsSchema
 */
const ClassDeclsBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Groups information which describes the nature or topic of an entity.
 * @see https://music-encoding.org/guidelines/v5/elements/classDecls.html
 */
export const ClassDeclsSchema = v.intersect([
	ClassDeclsBaseSchema,
	v.object({
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
	ModelHeadLikeSchema,
]);

export type ClassDeclsData = v.InferOutput<typeof ClassDeclsSchema>;
