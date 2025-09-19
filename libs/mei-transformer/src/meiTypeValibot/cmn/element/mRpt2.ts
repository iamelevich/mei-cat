import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrMRpt2AnlSchema } from "../../analytical";
import { AttrMRpt2GesSchema } from "../../gestural";
import { AttrMRpt2LogSchema } from "..";
import { AttrMRpt2VisSchema } from "../../visual";

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
