import * as v from "valibot";
import { AttrTieAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrTieGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { CurveSchema } from "../../usersymbols";
import { AttrTieVisSchema } from "../../visual";
import { AttrTieLogSchema } from "..";

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
export const TieSchema = v.intersect([
	TieBaseSchema,
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

export type TieData = v.InferOutput<typeof TieSchema>;
