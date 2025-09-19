import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrMRptAnlSchema } from "../../analytical";
import { AttrMRptGesSchema } from "../../gestural";
import { AttrMRptLogSchema } from "..";
import { AttrMRptVisSchema } from "../../visual";

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
export const MRptSchema = v.intersect([MRptBaseSchema]);

export type MRptData = v.InferOutput<typeof MRptSchema>;
