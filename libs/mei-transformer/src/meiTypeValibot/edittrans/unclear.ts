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
	AttrHandIdentSchema,
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
import { AttrAgentIdentSchema } from "./attr/agentIdent";
import { AttrEditSchema } from "./attr/edit";
import { AttrReasonIdentSchema } from "./attr/reasonIdent";
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

const UnclearBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrAgentIdentSchema.entries,
	...AttrEditSchema.entries,
	...AttrExtentSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrHandIdentSchema.entries,
	...AttrLangSchema.entries,
	...AttrReasonIdentSchema.entries,
});

type UnclearBaseData = v.InferOutput<typeof UnclearBaseSchema>;

/**
 * Contains material that cannot be transcribed with certainty because it is illegible or inaudible in the source.
 * @see https://music-encoding.org/guidelines/v5/elements/unclear.html
 */
export const UnclearSchema: v.GenericSchema<UnclearData> = v.intersect([
	UnclearBaseSchema,
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

export type UnclearData = UnclearBaseData &
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
