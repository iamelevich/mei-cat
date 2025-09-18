import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { type FLikeData, FLikeSchema } from "../harmony";
import {
	type NeumeComponentModifierLikeData,
	NeumeComponentModifierLikeSchema,
	type NeumeModifierLikeData,
	NeumeModifierLikeSchema,
	type NeumePartData,
	NeumePartSchema,
} from "../neumes";
import {
	AttrCommonSchema,
	AttrExtentSchema,
	AttrLangSchema,
	type KeyAccidLikeData,
	KeyAccidLikeSchema,
	type LayerPartData,
	LayerPartSchema,
	type MilestoneLikeMusicData,
	MilestoneLikeMusicSchema,
	type SectionPartData,
	SectionPartSchema,
	type StaffGrpLikeData,
	StaffGrpLikeSchema,
} from "../shared";
import { type DivLikeData, DivLikeSchema } from "../text";
import {
	type GraphicPrimitiveLikeData,
	GraphicPrimitiveLikeSchema,
} from "../usersymbols";
import { AttrEditSchema } from "./attr/edit";
import { AttrTransSchema } from "./attr/trans";
import {
	type ChoicePartData,
	ChoicePartSchema,
	type EditLikeData,
	EditLikeSchema,
	type EditTransPartData,
	EditTransPartSchema,
	type TranscriptionLikeData,
	TranscriptionLikeSchema,
} from "./model";

const CorrBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrExtentSchema.entries,
	...AttrLangSchema.entries,
	...AttrTransSchema.entries,
});

type CorrBaseData = v.InferOutput<typeof CorrBaseSchema>;

/**
 * Contains the correct form of an apparent erroneous passage.
 * @see https://music-encoding.org/guidelines/v5/elements/corr.html
 */
export const CorrSchema: v.GenericSchema<CorrData> = v.intersect([
	CorrBaseSchema,
	ChoicePartSchema,
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

export type CorrData = CorrBaseData &
	ChoicePartData &
	DivLikeData &
	EditLikeData &
	EditTransPartData &
	FLikeData &
	GraphicPrimitiveLikeData &
	KeyAccidLikeData &
	LayerPartData &
	MilestoneLikeMusicData &
	NeumeComponentModifierLikeData &
	NeumeModifierLikeData &
	NeumePartData &
	SectionPartData &
	StaffGrpLikeData &
	TranscriptionLikeData;
