import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, AttrMeterSigLogSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrMeterSigAnlSchema } from "../../analytical";
import { AttrMeterSigGesSchema } from "../../gestural";
import { AttrMeterSigVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for MeterSigSchema
 */
const MeterSigBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMeterSigAnlSchema.entries,
	...AttrMeterSigGesSchema.entries,
	...AttrMeterSigLogSchema.entries,
	...AttrMeterSigVisSchema.entries,
});

/**
 * Written meter signature.
 * @see https://music-encoding.org/guidelines/v5/elements/meterSig.html
 */
export const MeterSigSchema = v.intersect([MeterSigBaseSchema]);

export type MeterSigData = v.InferOutput<typeof MeterSigSchema>;
