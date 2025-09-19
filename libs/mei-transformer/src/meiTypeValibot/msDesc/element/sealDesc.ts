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
import { DecoNoteSchema, SealSchema } from ".";

/**
 * Base schema with attribute, to simplify types for SealDescSchema
 */
const SealDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Describes the seals or similar external attachments applied to an item.
 * @see https://music-encoding.org/guidelines/v5/elements/sealDesc.html
 */
export const SealDescSchema = v.intersect([
	SealDescBaseSchema,
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
		/**
		 * Reference to element seal
		 * @see https://music-encoding.org/guidelines/v5/elements/seal.html
		 */
		seal: v.optional(
			v.union([v.lazy(() => SealSchema), v.array(v.lazy(() => SealSchema))]),
		),
	}),
	ModelTextPhraseLikeLimitedSchema,
]);

export type SealDescData = v.InferOutput<typeof SealDescSchema>;
