import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDataPointingSchema,
	AttrLangSchema,
	ModelHeadLikeSchema,
	ModelPLikeSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for InterpretationSchema
 */
const InterpretationBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Describes the scope of any analytic or interpretive information added to the transcription of the music.
 * @see https://music-encoding.org/guidelines/v5/elements/interpretation.html
 */
export const InterpretationSchema = v.intersect([
	InterpretationBaseSchema,
	ModelHeadLikeSchema,
	ModelPLikeSchema,
]);

export type InterpretationData = v.InferOutput<typeof InterpretationSchema>;
