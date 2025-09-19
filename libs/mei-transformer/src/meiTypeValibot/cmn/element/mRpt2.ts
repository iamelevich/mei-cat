import * as v from "valibot";
import { AttrMRpt2AnlSchema } from "../../analytical/attr/mRpt2.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrMRpt2GesSchema } from "../../gestural/attr/mRpt2.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMRpt2VisSchema } from "../../visual/attr/mRpt2.vis";
import { AttrMRpt2LogSchema } from "../attr/mRpt2.log";

/**
 * Base schema with attribute, to simplify types for MRpt2Schema
 */
const MRpt2BaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMRpt2AnlSchema.entries,
	...AttrMRpt2GesSchema.entries,
	...AttrMRpt2LogSchema.entries,
	...AttrMRpt2VisSchema.entries,
});

/**
 * An indication that the previous two measures should be repeated.
 * @see https://music-encoding.org/guidelines/v5/elements/mRpt2.html
 */
export const MRpt2Schema = v.lazy(() => v.intersect([MRpt2BaseSchema]));

export type MRpt2Data = v.InferOutput<typeof MRpt2Schema>;
