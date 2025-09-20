import * as v from "valibot";
import { AttrMRptAnlSchema } from "../../analytical/attr/mRpt.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrMRptGesSchema } from "../../gestural/attr/mRpt.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMRptVisSchema } from "../../visual/attr/mRpt.vis";
import { AttrMRptLogSchema } from "../attr/mRpt.log";

/**
 * Base schema with attribute, to simplify types for MRptSchema
 */
const MRptBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMRptAnlSchema.entries,
	...AttrMRptGesSchema.entries,
	...AttrMRptLogSchema.entries,
	...AttrMRptVisSchema.entries,
});

/**
 * An indication that the previous measure should be repeated.
 * @see https://music-encoding.org/guidelines/v5/elements/mRpt.html
 */
export const MRptSchema = v.lazy(() => v.intersect([MRptBaseSchema]));

export type MRptData = v.InferOutput<typeof MRptSchema>;
