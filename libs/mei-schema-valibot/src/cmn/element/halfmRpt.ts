import * as v from "valibot";
import { AttrHalfmRptAnlSchema } from "../../analytical/attr/halfmRpt.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrHalfmRptGesSchema } from "../../gestural/attr/halfmRpt.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrHalfmRptVisSchema } from "../../visual/attr/halfmRpt.vis";
import { AttrHalfmRptLogSchema } from "../attr/halfmRpt.log";

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
export const HalfmRptSchema = v.lazy(() => v.intersect([HalfmRptBaseSchema]));

export type HalfmRptData = v.InferOutput<typeof HalfmRptSchema>;
