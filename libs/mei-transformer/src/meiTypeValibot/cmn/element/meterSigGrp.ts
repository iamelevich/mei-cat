import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, ModelMeterSigLikeSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrMeterSigGrpAnlSchema } from "../../analytical";
import { AttrMeterSigGrpGesSchema } from "../../gestural";
import { AttrMeterSigGrpLogSchema } from "..";
import { AttrMeterSigGrpVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for MeterSigGrpSchema
 */
const MeterSigGrpBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMeterSigGrpAnlSchema.entries,
	...AttrMeterSigGrpGesSchema.entries,
	...AttrMeterSigGrpLogSchema.entries,
	...AttrMeterSigGrpVisSchema.entries,
});

/**
 * Used to capture alternating, interchanging, mixed or other non-standard meter signatures.
 * @see https://music-encoding.org/guidelines/v5/elements/meterSigGrp.html
 */
export const MeterSigGrpSchema = v.intersect([
	MeterSigGrpBaseSchema,
	ModelMeterSigLikeSchema,
]);

export type MeterSigGrpData = v.InferOutput<typeof MeterSigGrpSchema>;
