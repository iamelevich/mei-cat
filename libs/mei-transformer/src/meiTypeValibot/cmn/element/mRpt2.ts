import * as v from "valibot";
import { AttrMRpt2AnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrMRpt2GesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrMRpt2VisSchema } from "../../visual";
import { AttrMRpt2LogSchema } from "..";

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
export const MRpt2Schema = v.intersect([MRpt2BaseSchema]);

export type MRpt2Data = v.InferOutput<typeof MRpt2Schema>;
