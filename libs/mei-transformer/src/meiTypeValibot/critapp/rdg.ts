import * as v from "valibot";
import { AttrRdgAnlSchema } from "../analytical/attr/rdg.anl";
import { StandardTagSchema } from "../common";
import { EditLikeSchema, TranscriptionLikeSchema } from "../edittrans";
import { AttrRdgGesSchema } from "../gestural/attr/rdg.ges";
import { FLikeSchema } from "../harmony";
import {
	NeumeComponentModifierLikeSchema,
	NeumeModifierLikeSchema,
	NeumePartSchema,
} from "../neumes";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrPointingSchema,
	AttrTargetEvalSchema,
	ExpansionSchema,
	LayerPartSchema,
	MilestoneLikeMusicSchema,
	SectionPartSchema,
	StaffGrpLikeSchema,
} from "../shared";
import { DivLikeSchema } from "../text";
import { GraphicPrimitiveLikeSchema } from "../usersymbols";
import { AttrRdgVisSchema } from "../visual";
import { AttrCritSchema } from "./attr/crit";
import { AttrRdgLogSchema } from "./attr/rdg.log";
import { AppLikeSchema } from "./model/appLike";
import { RdgPartSchema } from "./model/rdgPart";

/**
 * Contains a single reading within a textual variation.
 * @see https://music-encoding.org/guidelines/v5/elements/rdg.html
 */
export const RdgSchema = v.intersect([
	v.object({
		...StandardTagSchema.entries,
		...AttrCommonSchema.entries,
		...AttrLangSchema.entries,
		...AttrCritSchema.entries,
		...AttrPointingSchema.entries,
		...AttrRdgAnlSchema.entries,
		...AttrRdgGesSchema.entries,
		...AttrRdgLogSchema.entries,
		...AttrRdgVisSchema.entries,
		...AttrTargetEvalSchema.entries,

		expansion: v.optional(
			v.union([
				v.lazy(() => ExpansionSchema),
				v.array(v.lazy(() => ExpansionSchema)),
			]),
		),
	}),
	AppLikeSchema,
	DivLikeSchema,
	EditLikeSchema,
	FLikeSchema,
	GraphicPrimitiveLikeSchema,
	LayerPartSchema,
	MilestoneLikeMusicSchema,
	NeumeComponentModifierLikeSchema,
	NeumeModifierLikeSchema,
	NeumePartSchema,
	RdgPartSchema,
	SectionPartSchema,
	StaffGrpLikeSchema,
	TranscriptionLikeSchema,
]);

export type RdgData = v.InferOutput<typeof RdgSchema>;
