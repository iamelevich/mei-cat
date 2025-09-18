import * as v from "valibot";
import { AttrMeasureAnlSchema } from "../analytical/attr/measure.anl";
import { StandardTagSchema } from "../common";
import { AttrFacsimileSchema } from "../facsimile";
import { AttrMeasureGesSchema } from "../gestural/attr/measure.ges";
import {
	AttrCommonSchema,
	AttrMetadataPointingSchema,
	AttrPointingSchema,
	AttrTargetEvalSchema,
} from "../shared";
import { AttrMeasureVisSchema } from "../visual/attr/measure.vis";
import { AttrMeasureLogSchema } from "./attr/measure.log";
import { MNumSchema } from "./mNum";
import { MeasureLikeSchema } from "./model/measureLike";

/**
 * Unit of musical time consisting of a fixed number of note values of a given type, as determined by the prevailing meter, and delimited in musical notation by bar lines.
 * @see https://music-encoding.org/guidelines/v5/elements/measure.html
 */
export const MeasureSchema = v.intersect([
	v.object({
		...StandardTagSchema.entries,
		...AttrCommonSchema.entries,
		...AttrFacsimileSchema.entries,
		...AttrMetadataPointingSchema.entries,
		...AttrPointingSchema.entries,
		...AttrMeasureAnlSchema.entries,
		...AttrMeasureGesSchema.entries,
		...AttrMeasureLogSchema.entries,
		...AttrMeasureVisSchema.entries,
		...AttrTargetEvalSchema.entries,

		// Optional mNum element
		mNum: v.optional(v.lazy(() => MNumSchema)),
	}),
	MeasureLikeSchema,
]);

export type MeasureData = v.InferOutput<typeof MeasureSchema>;
