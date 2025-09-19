import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrGlissAnlSchema } from "../../analytical";
import { AttrGlissGesSchema } from "../../gestural";
import { AttrGlissLogSchema } from "..";
import { AttrGlissVisSchema } from "../../visual";

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
export const GlissSchema = v.intersect([
	GlissBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type GlissData = v.InferOutput<typeof GlissSchema>;
