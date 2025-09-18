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
import { AttrAgentIdentSchema } from "./attr/agentIdent";
import { AttrEditSchema } from "./attr/edit";
import { AttrReasonIdentSchema } from "./attr/reasonIdent";
import {
	EditLikeSchema,
	EditTransPartSchema,
	TranscriptionLikeSchema,
} from "./model";

/**
 * Contains material supplied by the transcriber or editor for any reason.
 * @see https://music-encoding.org/guidelines/v5/elements/supplied.html
 */
export const SuppliedSchema = v.intersect([
	v.object({
		...StandardTagSchema.entries,
		...AttrCommonSchema.entries,
		...AttrAgentIdentSchema.entries,
		...AttrEditSchema.entries,
		...AttrExtentSchema.entries,
		...AttrFacsimileSchema.entries,
		...AttrLangSchema.entries,
		...AttrReasonIdentSchema.entries,
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

export type SuppliedData = v.InferOutput<typeof SuppliedSchema>;
