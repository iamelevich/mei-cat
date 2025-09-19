import * as v from "valibot";
import { AttrSignifLetAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrSignifLetGesSchema } from "../../gestural";
import {
	AttrCommonSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";
import { AttrSignifLetVisSchema } from "../../visual";
import { AttrSignifLetLogSchema } from "..";

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
