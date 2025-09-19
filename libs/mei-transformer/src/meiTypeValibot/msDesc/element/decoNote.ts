import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	type ConditionData,
	ConditionSchema,
} from "../../header/element/condition";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { type HeadData, HeadSchema } from "../../shared/element/head";
import { type PData, PSchema } from "../../shared/element/p";
import {
	type ModelTextPhraseLikeLimitedData,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared/model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for DecoNoteSchema
 */
const DecoNoteBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

type DecoNoteBaseData = v.InferOutput<typeof DecoNoteBaseSchema>;

/**
 * Contains a description of one or more decorative features of an item.
 * @see https://music-encoding.org/guidelines/v5/elements/decoNote.html
 */
export const DecoNoteSchema: v.GenericSchema<DecoNoteData> = v.lazy(() =>
	v.intersect([
		DecoNoteBaseSchema,
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
		}),
		ModelTextPhraseLikeLimitedSchema,
	]),
);

export type DecoNoteData = DecoNoteBaseData & {
	condition?: ConditionData | ConditionData[];
	decoNote?: DecoNoteData | DecoNoteData[];
	head?: HeadData | HeadData[];
	p?: PData | PData[];
} & ModelTextPhraseLikeLimitedData;
