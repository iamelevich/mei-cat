import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { HeadSchema } from "../../shared/element/head";
import { PSchema } from "../../shared/element/p";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { TypeNoteSchema } from "./typeNote";

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
export const TypeDescSchema = v.lazy(() =>
	v.intersect([
		TypeDescBaseSchema,
		v.object({
			/**
			 * Reference to element head
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: v.optional(v.union([v.array(HeadSchema), HeadSchema])),
			/**
			 * Reference to element p
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: v.optional(v.union([v.array(PSchema), PSchema])),
			/**
			 * Reference to element typeNote
			 * @see https://music-encoding.org/guidelines/v5/elements/typeNote.html
			 */
			typeNote: v.optional(v.union([v.array(TypeNoteSchema), TypeNoteSchema])),
		}),
		ModelTextPhraseLikeLimitedSchema,
	]),
);

export type TypeDescData = v.InferOutput<typeof TypeDescSchema>;
