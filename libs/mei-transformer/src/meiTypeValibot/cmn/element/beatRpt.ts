import * as v from "valibot";
import { AttrBeatRptAnlSchema } from "../../analytical/attr/beatRpt.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBeatRptGesSchema } from "../../gestural/attr/beatRpt.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrPlistSchema } from "../../shared/attr/plist";
import { AttrTargetEvalSchema } from "../../shared/attr/targetEval";
import { AttrBeatRptVisSchema } from "../../visual/attr/beatRpt.vis";
import { AttrBeatRptLogSchema } from "../attr/beatRpt.log";

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
export const BeatRptSchema = v.lazy(() => v.intersect([BeatRptBaseSchema]));

export type BeatRptData = v.InferOutput<typeof BeatRptSchema>;
