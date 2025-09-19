import * as v from "valibot";
import { AttrPhraseAnlSchema } from "../../analytical/attr/phrase.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrPhraseGesSchema } from "../../gestural/attr/phrase.ges";
import { CurveSchema } from "../../usersymbols/element/curve";
import { AttrPhraseVisSchema } from "../../visual/attr/phrase.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrPhraseLogSchema } from "../attr/phrase.log";

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
export const PhraseSchema = v.lazy(() =>
	v.intersect([
		PhraseBaseSchema,
		v.object({
			/**
			 * Reference to element curve
			 * @see https://music-encoding.org/guidelines/v5/elements/curve.html
			 */
			curve: v.optional(v.union([CurveSchema, v.array(CurveSchema)])),
		}),
	]),
);

export type PhraseData = v.InferOutput<typeof PhraseSchema>;
