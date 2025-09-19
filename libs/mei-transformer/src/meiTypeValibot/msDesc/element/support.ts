import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	DimensionsSchema,
	HeadSchema,
	PSchema,
} from "../../shared";
import { ConditionSchema } from "../../header";
import { DecoNoteSchema } from ".";

/**
 * Base schema with attribute, to simplify types for SupportSchema
 */
const SupportBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Provides a description of the physical support material of a written item.
 * @see https://music-encoding.org/guidelines/v5/elements/support.html
 */
export const SupportSchema = v.intersect([
	SupportBaseSchema,
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

export type SupportData = v.InferOutput<typeof SupportSchema>;
