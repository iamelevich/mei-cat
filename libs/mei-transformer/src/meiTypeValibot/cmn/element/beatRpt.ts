import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBeatRptAnlSchema } from "../../analytical";
import { AttrBeatRptGesSchema } from "../../gestural";
import { AttrBeatRptLogSchema } from "..";
import { AttrBeatRptVisSchema } from "../../visual";
import {
	AttrCommonSchema,
	AttrPlistSchema,
	AttrTargetEvalSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for BeatRptSchema
 */
const BeatRptBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBeatRptAnlSchema.entries,
	...AttrBeatRptGesSchema.entries,
	...AttrBeatRptLogSchema.entries,
	...AttrBeatRptVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrPlistSchema.entries,
	...AttrTargetEvalSchema.entries,
});

/**
 * An indication that material on a preceding beat should be repeated.
 * @see https://music-encoding.org/guidelines/v5/elements/beatRpt.html
 */
export const BeatRptSchema = v.intersect([BeatRptBaseSchema]);

export type BeatRptData = v.InferOutput<typeof BeatRptSchema>;
