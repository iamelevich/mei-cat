import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrGrpSymLogSchema,
	ModelLabelLikeSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrGrpSymAnlSchema } from "../../analytical";
import { AttrGrpSymGesSchema } from "../../gestural";
import { AttrGrpSymVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for GrpSymSchema
 */
const GrpSymBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrGrpSymAnlSchema.entries,
	...AttrGrpSymGesSchema.entries,
	...AttrGrpSymLogSchema.entries,
	...AttrGrpSymVisSchema.entries,
});

/**
 * A brace or bracket used to group two or more staves of a score or part.
 * @see https://music-encoding.org/guidelines/v5/elements/grpSym.html
 */
export const GrpSymSchema = v.intersect([
	GrpSymBaseSchema,
	ModelLabelLikeSchema,
]);

export type GrpSymData = v.InferOutput<typeof GrpSymSchema>;
