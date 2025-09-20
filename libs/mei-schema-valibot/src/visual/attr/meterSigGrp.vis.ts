import * as v from "valibot";
import { AttrEnclosingCharsSchema } from "../../shared/attr/enclosingChars";
import { AttrVisibilitySchema } from "../../shared/attr/visibility";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSigGrp.vis.html
 */
export const AttrMeterSigGrpVisSchema = v.object({
	// Inherited attribute classes
	...AttrEnclosingCharsSchema.entries,
	...AttrVisibilitySchema.entries,
});

export type AttrMeterSigGrpVisData = v.InferOutput<
	typeof AttrMeterSigGrpVisSchema
>;
