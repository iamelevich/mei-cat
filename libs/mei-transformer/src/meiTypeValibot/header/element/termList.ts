import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrPointingSchema,
	LabelSchema,
	ModelHeadLikeSchema,
	TermSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for TermListSchema
 */
const TermListBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrPointingSchema.entries,
});

/**
 * Collection of text phrases which describe a resource.
 * @see https://music-encoding.org/guidelines/v5/elements/termList.html
 */
export const TermListSchema = v.intersect([
	TermListBaseSchema,
	v.object({
		/**
		 * Reference to element label
		 * @see https://music-encoding.org/guidelines/v5/elements/label.html
		 */
		label: v.optional(
			v.union([v.lazy(() => LabelSchema), v.array(v.lazy(() => LabelSchema))]),
		),
		/**
		 * Reference to element term
		 * @see https://music-encoding.org/guidelines/v5/elements/term.html
		 */
		term: v.optional(
			v.union([v.lazy(() => TermSchema), v.array(v.lazy(() => TermSchema))]),
		),
	}),
	ModelHeadLikeSchema,
]);

export type TermListData = v.InferOutput<typeof TermListSchema>;
