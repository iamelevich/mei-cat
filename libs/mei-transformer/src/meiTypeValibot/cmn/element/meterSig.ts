import * as v from "valibot";
import { AttrMeterSigAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrMeterSigGesSchema } from "../../gestural";
import { AttrCommonSchema, AttrMeterSigLogSchema } from "../../shared";
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
