import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { HeadSchema } from "../../shared/element/head";
import { PSchema } from "../../shared/element/p";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { ScriptNoteSchema } from "./scriptNote";

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
export const ScriptDescSchema = v.lazy(() =>
	v.intersect([
		ScriptDescBaseSchema,
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
			 * Reference to element scriptNote
			 * @see https://music-encoding.org/guidelines/v5/elements/scriptNote.html
			 */
			scriptNote: v.optional(
				v.union([v.array(ScriptNoteSchema), ScriptNoteSchema]),
			),
		}),
		ModelTextPhraseLikeLimitedSchema,
	]),
);

export type ScriptDescData = v.InferOutput<typeof ScriptDescSchema>;
