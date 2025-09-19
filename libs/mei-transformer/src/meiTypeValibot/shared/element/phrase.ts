import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, AttrPhraseLogSchema } from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrPhraseAnlSchema } from "../../analytical";
import { AttrPhraseGesSchema } from "../../gestural";
import { AttrPhraseVisSchema } from "../../visual";
import { CurveSchema } from "../../usersymbols";

/**
 * Base schema with attribute, to simplify types for PhraseSchema
 */
const PhraseBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrPhraseAnlSchema.entries,
	...AttrPhraseGesSchema.entries,
	...AttrPhraseLogSchema.entries,
	...AttrPhraseVisSchema.entries,
});

/**
 * Indication of 1) a "unified melodic idea" or 2) performance technique.
 * @see https://music-encoding.org/guidelines/v5/elements/phrase.html
 */
export const PhraseSchema = v.intersect([
	PhraseBaseSchema,
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

export type PhraseData = v.InferOutput<typeof PhraseSchema>;
