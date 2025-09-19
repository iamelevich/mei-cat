import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrMeterSigLogSchema } from "../../shared/attr/meterSig.log";

/**
 * Base schema with attribute, to simplify types for MeterSchema
 */
const MeterBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
	...AttrMeterSigLogSchema.entries,
});

/**
 * Captures information about the time signature within bibliographic descriptions.
 * @see https://music-encoding.org/guidelines/v5/elements/meter.html
 */
export const MeterSchema = v.lazy(() => v.intersect([MeterBaseSchema]));

export type MeterData = v.InferOutput<typeof MeterSchema>;
