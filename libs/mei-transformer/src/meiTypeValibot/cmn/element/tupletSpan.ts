import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrTupletSpanAnlSchema } from "../../analytical";
import { AttrTupletSpanGesSchema } from "../../gestural";
import { AttrTupletSpanLogSchema } from "..";
import { AttrTupletSpanVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for TupletSpanSchema
 */
const TupletSpanBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrTupletSpanAnlSchema.entries,
	...AttrTupletSpanGesSchema.entries,
	...AttrTupletSpanLogSchema.entries,
	...AttrTupletSpanVisSchema.entries,
});

/**
 * Alternative element for encoding tuplets, especially useful for tuplets that extend across bar lines.
 * @see https://music-encoding.org/guidelines/v5/elements/tupletSpan.html
 */
export const TupletSpanSchema = v.intersect([TupletSpanBaseSchema]);

export type TupletSpanData = v.InferOutput<typeof TupletSpanSchema>;
