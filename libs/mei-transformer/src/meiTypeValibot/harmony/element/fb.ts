import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { ModelFLikeSchema } from "..";

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
export const FbSchema = v.intersect([
	FbBaseSchema,
	ModelEditLikeSchema,
	ModelFLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type FbData = v.InferOutput<typeof FbSchema>;
