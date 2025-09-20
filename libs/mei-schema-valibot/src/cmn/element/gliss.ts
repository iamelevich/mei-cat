import * as v from "valibot";
import { AttrGlissAnlSchema } from "../../analytical/attr/gliss.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrGlissGesSchema } from "../../gestural/attr/gliss.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { AttrGlissVisSchema } from "../../visual/attr/gliss.vis";
import { AttrGlissLogSchema } from "../attr/gliss.log";

/**
 * Base schema with attribute, to simplify types for GlissSchema
 */
const GlissBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrGlissAnlSchema.entries,
	...AttrGlissGesSchema.entries,
	...AttrGlissLogSchema.entries,
	...AttrGlissVisSchema.entries,
});

/**
 * A continuous or sliding movement from one pitch to another, usually indicated by a straight or wavy line.
 * @see https://music-encoding.org/guidelines/v5/elements/gliss.html
 */
export const GlissSchema = v.lazy(() =>
	v.intersect([GlissBaseSchema, ModelTextPhraseLikeLimitedSchema]),
);

export type GlissData = v.InferOutput<typeof GlissSchema>;
