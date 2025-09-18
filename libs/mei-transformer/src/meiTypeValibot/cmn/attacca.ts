import * as v from "valibot";
import { AttrAttaccaAnlSchema } from "../analytical";
import { StandardTagSchema } from "../common";
import {
	type EditLikeData,
	EditLikeSchema,
	type TranscriptionLikeData,
	TranscriptionLikeSchema,
} from "../edittrans";
import { AttrFacsimileSchema } from "../facsimile";
import { AttrAttaccaGesSchema } from "../gestural";
import {
	AttrAttaccaLogSchema,
	AttrCommonSchema,
	AttrLangSchema,
	type TextPhraseLikeLimitedData,
	TextPhraseLikeLimitedSchema,
} from "../shared";
import {
	type GraphicPrimitiveLikeData,
	GraphicPrimitiveLikeSchema,
} from "../usersymbols";
import { AttrAttaccaVisSchema } from "../visual";

// Base schema with attributes only
const AttaccaBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrAttaccaAnlSchema.entries,
	...AttrAttaccaGesSchema.entries,
	...AttrAttaccaLogSchema.entries,
	...AttrAttaccaVisSchema.entries,
});

type AttaccaBaseData = v.InferOutput<typeof AttaccaBaseSchema>;

/**
 * An instruction to begin the next section or movement of a composition without pause.
 * @see https://music-encoding.org/guidelines/v5/elements/attacca.html
 */
export const AttaccaSchema: v.GenericSchema<AttaccaData> = v.intersect([
	AttaccaBaseSchema,
	EditLikeSchema,
	GraphicPrimitiveLikeSchema,
	TextPhraseLikeLimitedSchema,
	TranscriptionLikeSchema,
]);

export type AttaccaData = AttaccaBaseData &
	EditLikeData &
	GraphicPrimitiveLikeData &
	TextPhraseLikeLimitedData &
	TranscriptionLikeData;
