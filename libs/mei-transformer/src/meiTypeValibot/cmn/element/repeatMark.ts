import * as v from "valibot";
import { AttrRepeatMarkAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrRepeatMarkGesSchema } from "../../gestural";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrRepeatMarkLogSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";
import { AttrRepeatMarkVisSchema } from "../../visual";

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
