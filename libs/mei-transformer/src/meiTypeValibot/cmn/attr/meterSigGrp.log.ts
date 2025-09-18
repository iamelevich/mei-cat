import * as v from "valibot";

/**
 * Logical domain attributes.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSigGrp.log.html
 */
export const AttrMeterSigGrpLogSchema = v.object({
	/**
	 * Function of the meter signature group.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSigGrp.log.html#func
	 */
	"@func": v.union([
		v.literal("alternating"),
		v.literal("interchanging"),
		v.literal("mixed"),
		v.literal("other"),
	]),
});

export type AttrMeterSigGrpLogData = v.InferOutput<
	typeof AttrMeterSigGrpLogSchema
>;
