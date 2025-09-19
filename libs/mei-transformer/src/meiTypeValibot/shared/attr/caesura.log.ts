import * as v from "valibot";
import {
	AttrLayerIdentSchema,
	AttrPartIdentSchema,
	AttrStaffIdentSchema,
	AttrStartIdSchema,
	AttrTimestampLogSchema,
} from "..";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.caesura.log.html
 */
export const AttrCaesuraLogSchema = v.object({
	// Inherited attribute classes
	...AttrLayerIdentSchema.entries,
	...AttrPartIdentSchema.entries,
	...AttrStaffIdentSchema.entries,
	...AttrStartIdSchema.entries,
	...AttrTimestampLogSchema.entries,
});

export type AttrCaesuraLogData = v.InferOutput<typeof AttrCaesuraLogSchema>;
