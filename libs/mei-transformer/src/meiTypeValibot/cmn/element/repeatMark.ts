import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrRepeatMarkLogSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrRepeatMarkAnlSchema } from "../../analytical";
import { AttrRepeatMarkGesSchema } from "../../gestural";
import { AttrRepeatMarkVisSchema } from "../../visual";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";

/**
 * Base schema with attribute, to simplify types for RepeatMarkSchema
 */
const RepeatMarkBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrRepeatMarkAnlSchema.entries,
	...AttrRepeatMarkGesSchema.entries,
	...AttrRepeatMarkLogSchema.entries,
	...AttrRepeatMarkVisSchema.entries,
});

/**
 * An instruction expressed as a combination of text and symbols – segno and coda – typically above, below, or between staves, but not on the staff.
 * @see https://music-encoding.org/guidelines/v5/elements/repeatMark.html
 */
export const RepeatMarkSchema = v.intersect([
	RepeatMarkBaseSchema,
	ModelEditLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type RepeatMarkData = v.InferOutput<typeof RepeatMarkSchema>;
