import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBracketSpanAnlSchema } from "../../analytical";
import { AttrBracketSpanGesSchema } from "../../gestural";
import { AttrBracketSpanLogSchema } from "..";
import { AttrBracketSpanVisSchema } from "../../visual";
import {
	AttrCommonSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for BracketSpanSchema
 */
const BracketSpanBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBracketSpanAnlSchema.entries,
	...AttrBracketSpanGesSchema.entries,
	...AttrBracketSpanLogSchema.entries,
	...AttrBracketSpanVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * Marks a sequence of notational events grouped by a bracket.
 * @see https://music-encoding.org/guidelines/v5/elements/bracketSpan.html
 */
export const BracketSpanSchema = v.intersect([
	BracketSpanBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type BracketSpanData = v.InferOutput<typeof BracketSpanSchema>;
