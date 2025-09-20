import * as v from "valibot";
import { AttrTuningAnlSchema } from "../../analytical/attr/tuning.anl";
import { StandardTagSchema } from "../../common";
import { AttrTuningGesSchema } from "../../gestural/attr/tuning.ges";
import { AttrTuningVisSchema } from "../../visual/attr/tuning.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrTuningLogSchema } from "../attr/tuning.log";
import { ModelTuningPartSchema } from "../model/tuningPart";

/**
 * Base schema with attribute, to simplify types for TuningSchema
 */
const TuningBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrTuningAnlSchema.entries,
	...AttrTuningGesSchema.entries,
	...AttrTuningLogSchema.entries,
	...AttrTuningVisSchema.entries,
});

/**
 * Describes the tuning of an instrument.
 * @see https://music-encoding.org/guidelines/v5/elements/tuning.html
 */
export const TuningSchema = v.lazy(() =>
	v.intersect([TuningBaseSchema, ModelTuningPartSchema]),
);

export type TuningData = v.InferOutput<typeof TuningSchema>;
