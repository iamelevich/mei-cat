import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSigGrp.anl.html
 */
export const AttrMeterSigGrpAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrMeterSigGrpAnlData = v.InferOutput<
	typeof AttrMeterSigGrpAnlSchema
>;
