import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ConditionSchema } from "../../header/element/condition";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { HeadSchema } from "../../shared/element/head";
import { PSchema } from "../../shared/element/p";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { DecoNoteSchema } from "../element/decoNote";
import { SealSchema } from "../element/seal";

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
export const SealDescSchema = v.lazy(() =>
	v.intersect([
		SealDescBaseSchema,
		v.object({
			/**
			 * Reference to element condition
			 * @see https://music-encoding.org/guidelines/v5/elements/condition.html
			 */
			condition: v.optional(
				v.union([ConditionSchema, v.array(ConditionSchema)]),
			),
			/**
			 * Reference to element decoNote
			 * @see https://music-encoding.org/guidelines/v5/elements/decoNote.html
			 */
			decoNote: v.optional(v.union([DecoNoteSchema, v.array(DecoNoteSchema)])),
			/**
			 * Reference to element head
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: v.optional(v.union([HeadSchema, v.array(HeadSchema)])),
			/**
			 * Reference to element p
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: v.optional(v.union([PSchema, v.array(PSchema)])),
			/**
			 * Reference to element seal
			 * @see https://music-encoding.org/guidelines/v5/elements/seal.html
			 */
			seal: v.optional(v.union([SealSchema, v.array(SealSchema)])),
		}),
		ModelTextPhraseLikeLimitedSchema,
	]),
);

export type SealDescData = v.InferOutput<typeof SealDescSchema>;
