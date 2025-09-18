import * as v from "valibot";
import { StandardTagSchema } from "../common";
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
 * Contains the correct form of an apparent erroneous passage.
 * @see https://music-encoding.org/guidelines/v5/elements/corr.html
 */
export const CorrSchema = v.intersect([
	v.object({
		...StandardTagSchema.entries,
		...AttrCommonSchema.entries,
		...AttrEditSchema.entries,
		...AttrExtentSchema.entries,
		...AttrLangSchema.entries,
		...AttrTransSchema.entries,
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

export type CorrData = v.InferOutput<typeof CorrSchema>;
