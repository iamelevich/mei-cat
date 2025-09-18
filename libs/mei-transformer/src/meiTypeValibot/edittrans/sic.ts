import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrFacsimileSchema } from "../facsimile";
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

const SicBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrExtentSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrTransSchema.entries,
});

type SicBaseData = v.InferOutput<typeof SicBaseSchema>;

/**
 * Contains apparently incorrect or inaccurate material.
 * @see https://music-encoding.org/guidelines/v5/elements/sic.html
 */
export const SicSchema: v.GenericSchema<SicData> = v.intersect([
	SicBaseSchema,
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

export type SicData = SicBaseData &
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
