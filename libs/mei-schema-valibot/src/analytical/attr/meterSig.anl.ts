import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSig.anl.html
 */
export const AttrMeterSigAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrMeterSigAnlData = v.InferOutput<typeof AttrMeterSigAnlSchema>;
