import * as v from "valibot";
import { AttrGrpSymAnlSchema } from "../../analytical/attr/grpSym.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrGrpSymGesSchema } from "../../gestural/attr/grpSym.ges";
import { AttrGrpSymVisSchema } from "../../visual/attr/grpSym.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrGrpSymLogSchema } from "../attr/grpSym.log";
import { ModelLabelLikeSchema } from "../model/labelLike";

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
export const GrpSymSchema = v.lazy(() =>
	v.intersect([GrpSymBaseSchema, ModelLabelLikeSchema]),
);

export type GrpSymData = v.InferOutput<typeof GrpSymSchema>;
