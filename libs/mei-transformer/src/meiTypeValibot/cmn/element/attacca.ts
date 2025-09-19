import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrAttaccaAnlSchema } from "../../analytical";
import { AttrAttaccaGesSchema } from "../../gestural";
import {
	AttrAttaccaLogSchema,
	AttrCommonSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { AttrAttaccaVisSchema } from "../../visual";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";

/**
 * Base schema with attribute, to simplify types for AttaccaSchema
 */
const AttaccaBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAttaccaAnlSchema.entries,
	...AttrAttaccaGesSchema.entries,
	...AttrAttaccaLogSchema.entries,
	...AttrAttaccaVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * An instruction to begin the next section or movement of a composition without pause.
 * @see https://music-encoding.org/guidelines/v5/elements/attacca.html
 */
export const AttaccaSchema = v.intersect([
	AttaccaBaseSchema,
	ModelEditLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type AttaccaData = v.InferOutput<typeof AttaccaSchema>;
