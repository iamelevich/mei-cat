import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSigGrp.ges.html
 */
export const AttrMeterSigGrpGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrMeterSigGrpGesData = v.InferOutput<
	typeof AttrMeterSigGrpGesSchema
>;
