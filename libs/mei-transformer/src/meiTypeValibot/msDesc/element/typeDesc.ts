import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	HeadSchema,
	ModelTextPhraseLikeLimitedSchema,
	PSchema,
} from "../../shared";
import { TypeNoteSchema } from ".";

/**
 * Base schema with attribute, to simplify types for TypeDescSchema
 */
const TypeDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a description of the typefaces or other aspects of the printing of a printed source.
 * @see https://music-encoding.org/guidelines/v5/elements/typeDesc.html
 */
export const TypeDescSchema = v.intersect([
	TypeDescBaseSchema,
	v.object({
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
		 * Reference to element typeNote
		 * @see https://music-encoding.org/guidelines/v5/elements/typeNote.html
		 */
		typeNote: v.optional(
			v.union([
				v.lazy(() => TypeNoteSchema),
				v.array(v.lazy(() => TypeNoteSchema)),
			]),
		),
	}),
	ModelTextPhraseLikeLimitedSchema,
]);

export type TypeDescData = v.InferOutput<typeof TypeDescSchema>;
