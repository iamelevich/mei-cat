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
import { DecoNoteSchema } from ".";

/**
 * Base schema with attribute, to simplify types for DecoDescSchema
 */
const DecoDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a description of the decoration of an item.
 * @see https://music-encoding.org/guidelines/v5/elements/decoDesc.html
 */
export const DecoDescSchema = v.intersect([
	DecoDescBaseSchema,
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

export type DecoDescData = v.InferOutput<typeof DecoDescSchema>;
