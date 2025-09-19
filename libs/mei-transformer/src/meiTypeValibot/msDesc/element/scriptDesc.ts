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
import { ScriptNoteSchema } from ".";

/**
 * Base schema with attribute, to simplify types for ScriptDescSchema
 */
const ScriptDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a description of the letters or characters used in an autographic item.
 * @see https://music-encoding.org/guidelines/v5/elements/scriptDesc.html
 */
export const ScriptDescSchema = v.intersect([
	ScriptDescBaseSchema,
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
		 * Reference to element scriptNote
		 * @see https://music-encoding.org/guidelines/v5/elements/scriptNote.html
		 */
		scriptNote: v.optional(
			v.union([
				v.lazy(() => ScriptNoteSchema),
				v.array(v.lazy(() => ScriptNoteSchema)),
			]),
		),
	}),
	ModelTextPhraseLikeLimitedSchema,
]);

export type ScriptDescData = v.InferOutput<typeof ScriptDescSchema>;
