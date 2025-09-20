import * as v from "valibot";
import { AttrMultiRptAnlSchema } from "../../analytical/attr/multiRpt.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrMultiRptGesSchema } from "../../gestural/attr/multiRpt.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMultiRptVisSchema } from "../../visual/attr/multiRpt.vis";
import { AttrMultiRptLogSchema } from "../attr/multiRpt.log";

/**
 * Base schema with attribute, to simplify types for MultiRptSchema
 */
const MultiRptBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMultiRptAnlSchema.entries,
	...AttrMultiRptGesSchema.entries,
	...AttrMultiRptLogSchema.entries,
	...AttrMultiRptVisSchema.entries,
});

/**
 * Multiple repeated measures.
 * @see https://music-encoding.org/guidelines/v5/elements/multiRpt.html
 */
export const MultiRptSchema = v.lazy(() => v.intersect([MultiRptBaseSchema]));

export type MultiRptData = v.InferOutput<typeof MultiRptSchema>;
