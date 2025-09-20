import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ConditionSchema } from "../../header/element/condition";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { HeadSchema } from "../../shared/element/head";
import { PSchema } from "../../shared/element/p";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { BindingSchema } from "./binding";
import { DecoNoteSchema } from "./decoNote";

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
export const BindingDescSchema = v.lazy(() =>
	v.intersect([
		BindingDescBaseSchema,
		v.object({
			/**
			 * Reference to element binding
			 * @see https://music-encoding.org/guidelines/v5/elements/binding.html
			 */
			binding: v.optional(v.union([v.array(BindingSchema), BindingSchema])),
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

export type BindingDescData = v.InferOutput<typeof BindingDescSchema>;
