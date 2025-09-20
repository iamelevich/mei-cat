import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSig.ges.html
 */
export const AttrMeterSigGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrMeterSigGesData = v.InferOutput<typeof AttrMeterSigGesSchema>;
