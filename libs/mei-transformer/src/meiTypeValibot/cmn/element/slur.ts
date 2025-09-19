import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrSlurAnlSchema } from "../../analytical";
import { AttrSlurGesSchema } from "../../gestural";
import { AttrSlurLogSchema } from "..";
import { AttrSlurVisSchema } from "../../visual";
import { CurveSchema } from "../../usersymbols";

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
export const SlurSchema = v.intersect([
	SlurBaseSchema,
	v.object({
		/**
		 * Reference to element curve
		 * @see https://music-encoding.org/guidelines/v5/elements/curve.html
		 */
		curve: v.optional(
			v.union([v.lazy(() => CurveSchema), v.array(v.lazy(() => CurveSchema))]),
		),
	}),
]);

export type SlurData = v.InferOutput<typeof SlurSchema>;
