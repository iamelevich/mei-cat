import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ConditionSchema } from "../../header";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	HeadSchema,
	ModelTextPhraseLikeLimitedSchema,
	PSchema,
} from "../../shared";
import { BindingSchema, DecoNoteSchema } from ".";

/**
 * Base schema with attribute, to simplify types for BindingDescSchema
 */
const BindingDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Describes the present and former bindings of an item.
 * @see https://music-encoding.org/guidelines/v5/elements/bindingDesc.html
 */
export const BindingDescSchema = v.intersect([
	BindingDescBaseSchema,
	v.object({
		/**
		 * Reference to element binding
		 * @see https://music-encoding.org/guidelines/v5/elements/binding.html
		 */
		binding: v.optional(
			v.union([
				v.lazy(() => BindingSchema),
				v.array(v.lazy(() => BindingSchema)),
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
	ModelTextPhraseLikeLimitedSchema,
]);

export type BindingDescData = v.InferOutput<typeof BindingDescSchema>;
