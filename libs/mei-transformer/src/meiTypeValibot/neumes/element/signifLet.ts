import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrSignifLetAnlSchema } from "../../analytical";
import { AttrSignifLetGesSchema } from "../../gestural";
import { AttrSignifLetLogSchema } from "..";
import { AttrSignifLetVisSchema } from "../../visual";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";

/**
 * Base schema with attribute, to simplify types for SignifLetSchema
 */
const SignifLetBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrSignifLetAnlSchema.entries,
	...AttrSignifLetGesSchema.entries,
	...AttrSignifLetLogSchema.entries,
	...AttrSignifLetVisSchema.entries,
});

/**
 * Significantive letter(s).
 * @see https://music-encoding.org/guidelines/v5/elements/signifLet.html
 */
export const SignifLetSchema = v.intersect([
	SignifLetBaseSchema,
	ModelEditLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type SignifLetData = v.InferOutput<typeof SignifLetSchema>;
