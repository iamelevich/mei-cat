import * as v from "valibot";
import { AttrSignifLetAnlSchema } from "../../analytical/attr/signifLet.anl";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrSignifLetGesSchema } from "../../gestural/attr/signifLet.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrSignifLetVisSchema } from "../../visual/attr/signifLet.vis";
import { AttrSignifLetLogSchema } from "../attr/signifLet.log";

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
export const SignifLetSchema = v.lazy(() =>
	v.intersect([
		SignifLetBaseSchema,
		ModelEditLikeSchema,
		ModelGraphicPrimitiveLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type SignifLetData = v.InferOutput<typeof SignifLetSchema>;
