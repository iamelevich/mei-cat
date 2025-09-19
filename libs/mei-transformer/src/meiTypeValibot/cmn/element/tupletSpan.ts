import * as v from "valibot";
import { AttrTupletSpanAnlSchema } from "../../analytical/attr/tupletSpan.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrTupletSpanGesSchema } from "../../gestural/attr/tupletSpan.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrTupletSpanVisSchema } from "../../visual/attr/tupletSpan.vis";
import { AttrTupletSpanLogSchema } from "../attr/tupletSpan.log";

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
export const TupletSpanSchema = v.lazy(() =>
	v.intersect([TupletSpanBaseSchema]),
);

export type TupletSpanData = v.InferOutput<typeof TupletSpanSchema>;
