import * as v from "valibot";
import { AttrMeterSigAnlSchema } from "../../analytical/attr/meterSig.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrMeterSigGesSchema } from "../../gestural/attr/meterSig.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMeterSigLogSchema } from "../../shared/attr/meterSig.log";
import { AttrMeterSigVisSchema } from "../../visual/attr/meterSig.vis";

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
export const MeterSigSchema = v.lazy(() => v.intersect([MeterSigBaseSchema]));

export type MeterSigData = v.InferOutput<typeof MeterSigSchema>;
