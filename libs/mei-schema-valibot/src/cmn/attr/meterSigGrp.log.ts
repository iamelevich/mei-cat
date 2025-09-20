import * as v from "valibot";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSigGrp.log.html
 */
export const AttrMeterSigGrpLogSchema = v.object({
	// Direct attributes
	/**
	 * Function of the meter signature group.
	 */
	"@func": v.optional(v.string()),
});

export type AttrMeterSigGrpLogData = v.InferOutput<
	typeof AttrMeterSigGrpLogSchema
>;
