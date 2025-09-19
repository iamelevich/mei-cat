import * as v from "valibot";

/**
 * Used by staffDef and scoreDef to provide default values for attributes in the visual domain related to meter signature..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSigDefault.vis.html
 */
export const AttrMeterSigDefaultVisSchema = v.object({
	// Direct attributes
	/**
	 * Contains an indication of how the meter signature should be rendered.
	 */
	"@meter.form": v.optional(v.string()),
	/**
	 * Determines whether the old meter signature should be displayed when the meter signature changes.
	 */
	"@meter.showchange": v.optional(v.string()),
	/**
	 * Determines whether the meter signature is to be displayed.
	 */
	"@meter.visible": v.optional(v.string()),
});

export type AttrMeterSigDefaultVisData = v.InferOutput<
	typeof AttrMeterSigDefaultVisSchema
>;
