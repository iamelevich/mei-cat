import * as v from "valibot";
import { AttrMeterSigGrpAnlSchema } from "../../analytical/attr/meterSigGrp.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrMeterSigGrpGesSchema } from "../../gestural/attr/meterSigGrp.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelMeterSigLikeSchema } from "../../shared/model/meterSigLike";
import { AttrMeterSigGrpVisSchema } from "../../visual/attr/meterSigGrp.vis";
import { AttrMeterSigGrpLogSchema } from "../attr/meterSigGrp.log";

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
export const MeterSigGrpSchema = v.lazy(() =>
	v.intersect([MeterSigGrpBaseSchema, ModelMeterSigLikeSchema]),
);

export type MeterSigGrpData = v.InferOutput<typeof MeterSigGrpSchema>;
