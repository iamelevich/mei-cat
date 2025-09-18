import * as v from "valibot";
import { AttrRdgAnlSchema } from "../analytical";
import { StandardTagSchema } from "../common";
import { EditLikeSchema } from "../edittrans";
import { AttrRdgGesSchema } from "../gestural";
import { FLikeSchema } from "../harmony";
import {
	AttrCommonSchema,
	AttrPointingSchema,
	AttrTargetEvalSchema,
} from "../shared";
import { DivLikeSchema } from "../text";
import { AttrRdgVisSchema } from "../visual";
import { AttrCritSchema } from "./attr/crit";
import { AttrRdgLogSchema } from "./attr/rdg.log";
import { AppLikeSchema } from "./model/appLike";

/**
 * Contains the lemma, or base text, of a textual variation.
 * @see https://music-encoding.org/guidelines/v5/elements/lem.html
 */
export const LemSchema = v.intersect([
	v.object({
		...StandardTagSchema.entries,
		...AttrCommonSchema.entries,
		...AttrCritSchema.entries,
		...AttrPointingSchema.entries,
		...AttrRdgAnlSchema.entries,
		...AttrRdgGesSchema.entries,
		...AttrRdgLogSchema.entries,
		...AttrRdgVisSchema.entries,
		...AttrTargetEvalSchema.entries,
	}),
	AppLikeSchema,
	DivLikeSchema,
	EditLikeSchema,
	FLikeSchema,
]);

export type LemData = v.InferOutput<typeof LemSchema>;
