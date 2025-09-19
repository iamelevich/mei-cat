import * as v from "valibot";
import { AttrSlurAnlSchema } from "../../analytical/attr/slur.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrSlurGesSchema } from "../../gestural/attr/slur.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { CurveSchema } from "../../usersymbols/element/curve";
import { AttrSlurVisSchema } from "../../visual/attr/slur.vis";
import { AttrSlurLogSchema } from "../attr/slur.log";

/**
 * Base schema with attribute, to simplify types for SlurSchema
 */
const SlurBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrSlurAnlSchema.entries,
	...AttrSlurGesSchema.entries,
	...AttrSlurLogSchema.entries,
	...AttrSlurVisSchema.entries,
});

/**
 * Indication of 1) a "unified melodic idea" or 2) performance technique.
 * @see https://music-encoding.org/guidelines/v5/elements/slur.html
 */
export const SlurSchema = v.lazy(() =>
	v.intersect([
		SlurBaseSchema,
		v.object({
			/**
			 * Reference to element curve
			 * @see https://music-encoding.org/guidelines/v5/elements/curve.html
			 */
			curve: v.optional(v.union([CurveSchema, v.array(CurveSchema)])),
		}),
	]),
);

export type SlurData = v.InferOutput<typeof SlurSchema>;
