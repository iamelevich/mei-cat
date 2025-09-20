import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ConditionSchema } from "../../header/element/condition";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { HeadSchema } from "../../shared/element/head";
import { PSchema } from "../../shared/element/p";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { DecoNoteSchema } from "./decoNote";

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
export const DecoDescSchema = v.lazy(() =>
	v.intersect([
		DecoDescBaseSchema,
		v.object({
			/**
			 * Reference to element condition
			 * @see https://music-encoding.org/guidelines/v5/elements/condition.html
			 */
			condition: v.optional(
				v.union([v.array(ConditionSchema), ConditionSchema]),
			),
			/**
			 * Reference to element decoNote
			 * @see https://music-encoding.org/guidelines/v5/elements/decoNote.html
			 */
			decoNote: v.optional(v.union([v.array(DecoNoteSchema), DecoNoteSchema])),
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
		}),
		ModelTextPhraseLikeLimitedSchema,
	]),
);

export type DecoDescData = v.InferOutput<typeof DecoDescSchema>;
