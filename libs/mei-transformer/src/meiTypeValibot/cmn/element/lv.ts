import * as v from "valibot";
import { AttrLvAnlSchema } from "../../analytical/attr/lv.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrLvGesSchema } from "../../gestural/attr/lv.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { CurveSchema } from "../../usersymbols/element/curve";
import { AttrLvVisSchema } from "../../visual/attr/lv.vis";
import { AttrLvLogSchema } from "../attr/lv.log";

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
export const LvSchema = v.lazy(() =>
	v.intersect([
		LvBaseSchema,
		v.object({
			/**
			 * Reference to element curve
			 * @see https://music-encoding.org/guidelines/v5/elements/curve.html
			 */
			curve: v.optional(v.union([v.array(CurveSchema), CurveSchema])),
		}),
	]),
);

export type LvData = v.InferOutput<typeof LvSchema>;
