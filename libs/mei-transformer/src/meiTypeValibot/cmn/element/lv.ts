import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrLvAnlSchema } from "../../analytical";
import { AttrLvGesSchema } from "../../gestural";
import { AttrLvLogSchema } from "..";
import { AttrLvVisSchema } from "../../visual";
import { CurveSchema } from "../../usersymbols";

/**
 * Base schema with attribute, to simplify types for LvSchema
 */
const LvBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLvAnlSchema.entries,
	...AttrLvGesSchema.entries,
	...AttrLvLogSchema.entries,
	...AttrLvVisSchema.entries,
});

/**
 * A "tie-like" indication that a note should ring beyond its written duration.
 * @see https://music-encoding.org/guidelines/v5/elements/lv.html
 */
export const LvSchema = v.intersect([
	LvBaseSchema,
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

export type LvData = v.InferOutput<typeof LvSchema>;
