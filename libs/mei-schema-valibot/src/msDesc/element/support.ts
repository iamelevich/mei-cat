import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ConditionSchema } from "../../header/element/condition";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { DimensionsSchema } from "../../shared/element/dimensions";
import { HeadSchema } from "../../shared/element/head";
import { PSchema } from "../../shared/element/p";
import { DecoNoteSchema } from "./decoNote";

/**
 * Base schema with attribute, to simplify types for SupportSchema
 */
const SupportBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Provides a description of the physical support material of a written item.
 * @see https://music-encoding.org/guidelines/v5/elements/support.html
 */
export const SupportSchema = v.lazy(() =>
	v.intersect([
		SupportBaseSchema,
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
			 * Reference to element dimensions
			 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
			 */
			dimensions: v.optional(
				v.union([v.array(DimensionsSchema), DimensionsSchema]),
			),
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
	]),
);

export type SupportData = v.InferOutput<typeof SupportSchema>;
