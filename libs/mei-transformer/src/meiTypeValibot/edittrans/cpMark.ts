import * as v from "valibot";
import { AttrCpMarkAnlSchema } from "../analytical/attr/cpMark.anl";
import { StandardTagSchema } from "../common";
import { AttrFacsimileSchema } from "../facsimile";
import { AttrCpMarkGesSchema } from "../gestural/attr/cpMark.ges";
import {
	AttrCommonSchema,
	AttrLangSchema,
	TextPhraseLikeLimitedSchema,
} from "../shared";
import { AttrCpMarkVisSchema } from "../visual/attr/cpMark.vis";
import { AttrCpMarkLogSchema } from "./attr/cpMark.log";
import {
	type EditLikeData,
	EditLikeSchema,
	type TranscriptionLikeData,
	TranscriptionLikeSchema,
} from "./model";

const CpMarkBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrCpMarkLogSchema.entries,
	...AttrCpMarkVisSchema.entries,
	...AttrCpMarkGesSchema.entries,
	...AttrCpMarkAnlSchema.entries,
});

type CpMarkBaseData = v.InferOutput<typeof CpMarkBaseSchema>;

/**
 * A verbal or graphical indication to copy musical material written elsewhere.
 * @see https://music-encoding.org/guidelines/v5/elements/cpMark.html
 */
export const CpMarkSchema: v.GenericSchema<CpMarkData> = v.intersect([
	CpMarkBaseSchema,
	EditLikeSchema,
	TextPhraseLikeLimitedSchema,
	TranscriptionLikeSchema,
]);

export type CpMarkData = CpMarkBaseData & EditLikeData & TranscriptionLikeData;
