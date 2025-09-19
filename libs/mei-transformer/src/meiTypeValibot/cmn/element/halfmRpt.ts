import * as v from "valibot";
import { AttrHalfmRptAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrHalfmRptGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrHalfmRptVisSchema } from "../../visual";
import { AttrHalfmRptLogSchema } from "..";

/**
 * Base schema with attribute, to simplify types for HalfmRptSchema
 */
const HalfmRptBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrHalfmRptAnlSchema.entries,
	...AttrHalfmRptGesSchema.entries,
	...AttrHalfmRptLogSchema.entries,
	...AttrHalfmRptVisSchema.entries,
});

/**
 * A half-measure repeat in any meter.
 * @see https://music-encoding.org/guidelines/v5/elements/halfmRpt.html
 */
export const HalfmRptSchema = v.intersect([HalfmRptBaseSchema]);

export type HalfmRptData = v.InferOutput<typeof HalfmRptSchema>;
