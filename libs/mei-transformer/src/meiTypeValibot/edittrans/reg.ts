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
	AttrAuthorizedSchema,
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

const RegBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrEditSchema.entries,
	...AttrExtentSchema.entries,
	...AttrLangSchema.entries,
});

type RegBaseData = v.InferOutput<typeof RegBaseSchema>;

/**
 * Contains material which has been regularized or normalized in some sense.
 * @see https://music-encoding.org/guidelines/v5/elements/reg.html
 */
export const RegSchema: v.GenericSchema<RegData> = v.intersect([
	RegBaseSchema,
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

export type RegData = RegBaseData &
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
