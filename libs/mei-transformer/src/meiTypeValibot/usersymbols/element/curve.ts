import * as v from "valibot";
import { AttrCurveAnlSchema } from "../../analytical/attr/curve.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCurveGesSchema } from "../../gestural/attr/curve.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrCurveVisSchema } from "../../visual/attr/curve.vis";
import { AttrCurveLogSchema } from "../attr/curve.log";

/**
 * Base schema with attribute, to simplify types for CurveSchema
 */
const CurveBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrCurveAnlSchema.entries,
	...AttrCurveGesSchema.entries,
	...AttrCurveLogSchema.entries,
	...AttrCurveVisSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * A curved line that cannot be represented by a more specific element, such as a slur.
 * @see https://music-encoding.org/guidelines/v5/elements/curve.html
 */
export const CurveSchema = v.lazy(() => v.intersect([CurveBaseSchema]));

export type CurveData = v.InferOutput<typeof CurveSchema>;
