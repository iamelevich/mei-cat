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
	KeyAccidLikeSchema,
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
 * Indicates restoration of material to an earlier state by cancellation of an editorial or authorial marking or instruction.
 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
 */
export const RestoreSchema = v.intersect([
	v.object({
		...StandardTagSchema.entries,
		...AttrCommonSchema.entries,
		...AttrEditSchema.entries,
		...AttrExtentSchema.entries,
		...AttrFacsimileSchema.entries,
		...AttrLangSchema.entries,
		...AttrTransSchema.entries,

		/**
		 * Provides a description of the means of restoration, stet or strike-down, for example.
		 * @see https://music-encoding.org/guidelines/v5/elements/restore.html#desc
		 */
		"@desc": v.optional(v.string()),
	}),
	DivLikeSchema,
	EditLikeSchema,
	EditTransPartSchema,
	FLikeSchema,
	GraphicPrimitiveLikeSchema,
	KeyAccidLikeSchema,
	LayerPartSchema,
	MilestoneLikeMusicSchema,
	NeumeComponentModifierLikeSchema,
	NeumeModifierLikeSchema,
	NeumePartSchema,
	SectionPartSchema,
	StaffGrpLikeSchema,
	TranscriptionLikeSchema,
]);

export type RestoreData = v.InferOutput<typeof RestoreSchema>;
