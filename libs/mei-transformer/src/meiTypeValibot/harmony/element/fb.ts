import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelFLikeSchema } from "../model/fLike";

/**
 * Base schema with attribute, to simplify types for FbSchema
 */
const FbBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * Symbols added to a bass line that indicate harmony. Used to improvise a chordal accompaniment. Sometimes called Generalbass, thoroughbass, or basso continuo.
 * @see https://music-encoding.org/guidelines/v5/elements/fb.html
 */
export const FbSchema = v.lazy(() =>
	v.intersect([
		FbBaseSchema,
		ModelEditLikeSchema,
		ModelFLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type FbData = v.InferOutput<typeof FbSchema>;
