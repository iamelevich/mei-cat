import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrContemporarySchema,
	AttrDatableSchema,
	AttrLangSchema,
	DimensionsSchema,
	HeadSchema,
	PSchema,
} from "../../shared";
import { ConditionSchema } from "../../header";
import { DecoNoteSchema } from ".";

/**
 * Base schema with attribute, to simplify types for BindingSchema
 */
const BindingBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrContemporarySchema.entries,
	...AttrDatableSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a description of one binding, <abbr>i.e.</abbr>, type of covering, boards, etc. applied to an item.
 * @see https://music-encoding.org/guidelines/v5/elements/binding.html
 */
export const BindingSchema = v.intersect([
	BindingBaseSchema,
	v.object({
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
		 * Reference to element decoNote
		 * @see https://music-encoding.org/guidelines/v5/elements/decoNote.html
		 */
		decoNote: v.optional(
			v.union([
				v.lazy(() => DecoNoteSchema),
				v.array(v.lazy(() => DecoNoteSchema)),
			]),
		),
		/**
		 * Reference to element dimensions
		 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
		 */
		dimensions: v.optional(
			v.union([
				v.lazy(() => DimensionsSchema),
				v.array(v.lazy(() => DimensionsSchema)),
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
	}),
]);

export type BindingData = v.InferOutput<typeof BindingSchema>;
