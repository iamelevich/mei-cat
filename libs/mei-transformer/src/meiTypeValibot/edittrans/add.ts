import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrFacsimileSchema } from "../facsimile";
import { FLikeSchema } from "../harmony";
import {
	NeumeComponentModifierLikeSchema,
	NeumeModifierLikeSchema,
	NeumePartSchema,
} from "../neumes";
import {
	AttrCommonSchema,
	AttrExtentSchema,
	AttrLangSchema,
	LayerPartSchema,
	MilestoneLikeMusicSchema,
	SectionPartSchema,
	StaffGrpLikeSchema,
} from "../shared";
import { DivLikeSchema } from "../text";
import { GraphicPrimitiveLikeSchema } from "../usersymbols";
import { AttrEditSchema, AttrTransSchema } from "./attr";
import {
	EditLikeSchema,
	EditTransPartSchema,
	TranscriptionLikeSchema,
} from "./model";

/**
 * Marks an addition to the text.
 * @see https://music-encoding.org/guidelines/v5/elements/add.html
 */
export const AddSchema = v.intersect([
	v.object({
		...StandardTagSchema.entries,
		...AttrCommonSchema.entries,
		...AttrEditSchema.entries,
		...AttrExtentSchema.entries,
		...AttrFacsimileSchema.entries,
		...AttrLangSchema.entries,
		...AttrTransSchema.entries,

		// Attributes of add
		/**
		 * Location of the addition.
		 * One or more values from data.PLACEMENT, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/elements/add.html#place
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.PLACEMENT.html
		 */
		"@place": v.optional(v.union([v.string(), v.array(v.string())])),
	}),
	DivLikeSchema,
	EditLikeSchema,
	EditTransPartSchema,
	FLikeSchema,
	GraphicPrimitiveLikeSchema,
	LayerPartSchema,
	MilestoneLikeMusicSchema,
	NeumeComponentModifierLikeSchema,
	NeumeModifierLikeSchema,
	NeumePartSchema,
	SectionPartSchema,
	StaffGrpLikeSchema,
	TranscriptionLikeSchema,
]);

export type AddData = v.InferOutput<typeof AddSchema>;
