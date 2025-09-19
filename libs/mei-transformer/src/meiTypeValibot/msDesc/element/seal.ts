import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrContemporarySchema,
	AttrDatableSchema,
	AttrLangSchema,
	HeadSchema,
	ModelTextPhraseLikeLimitedSchema,
	PSchema,
} from "../../shared";
import { ConditionSchema } from "../../header";
import { DecoNoteSchema } from ".";

/**
 * Base schema with attribute, to simplify types for SealSchema
 */
const SealBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrContemporarySchema.entries,
	...AttrDatableSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * A single seal or similar attachment.
 * @see https://music-encoding.org/guidelines/v5/elements/seal.html
 */
export const SealSchema = v.intersect([
	SealBaseSchema,
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

export type SealData = v.InferOutput<typeof SealSchema>;
