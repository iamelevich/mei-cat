import * as v from "valibot";
import { AttrCurveAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrCurveGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrCurveVisSchema } from "../../visual";
import { AttrCurveLogSchema } from "..";

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
export const CurveSchema = v.intersect([CurveBaseSchema]);

export type CurveData = v.InferOutput<typeof CurveSchema>;
