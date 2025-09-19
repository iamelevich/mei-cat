import * as v from "valibot";
import { AttrBracketSpanAnlSchema } from "../../analytical/attr/bracketSpan.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBracketSpanGesSchema } from "../../gestural/attr/bracketSpan.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { AttrBracketSpanVisSchema } from "../../visual/attr/bracketSpan.vis";
import { AttrBracketSpanLogSchema } from "../attr/bracketSpan.log";

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
export const BracketSpanSchema = v.lazy(() =>
	v.intersect([BracketSpanBaseSchema, ModelTextPhraseLikeLimitedSchema]),
);

export type BracketSpanData = v.InferOutput<typeof BracketSpanSchema>;
