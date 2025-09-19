import * as v from "valibot";
import { AttrTieAnlSchema } from "../../analytical/attr/tie.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrTieGesSchema } from "../../gestural/attr/tie.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { CurveSchema } from "../../usersymbols/element/curve";
import { AttrTieVisSchema } from "../../visual/attr/tie.vis";
import { AttrTieLogSchema } from "../attr/tie.log";

/**
 * Base schema with attribute, to simplify types for TieSchema
 */
const TieBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrTieAnlSchema.entries,
	...AttrTieGesSchema.entries,
	...AttrTieLogSchema.entries,
	...AttrTieVisSchema.entries,
});

/**
 * An indication that two notes of the same pitch form a single note with their combined rhythmic values.
 * @see https://music-encoding.org/guidelines/v5/elements/tie.html
 */
export const TieSchema = v.lazy(() =>
	v.intersect([
		TieBaseSchema,
		v.object({
			/**
			 * Reference to element curve
			 * @see https://music-encoding.org/guidelines/v5/elements/curve.html
			 */
			curve: v.optional(v.union([CurveSchema, v.array(CurveSchema)])),
		}),
	]),
);

export type TieData = v.InferOutput<typeof TieSchema>;
