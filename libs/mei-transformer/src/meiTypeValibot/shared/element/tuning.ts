import * as v from "valibot";
import { AttrTuningAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrTuningGesSchema } from "../../gestural";
import { AttrTuningVisSchema } from "../../visual";
import {
	AttrCommonSchema,
	AttrTuningLogSchema,
	ModelTuningPartSchema,
} from "..";

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
export const TuningSchema = v.intersect([
	TuningBaseSchema,
	ModelTuningPartSchema,
]);

export type TuningData = v.InferOutput<typeof TuningSchema>;
