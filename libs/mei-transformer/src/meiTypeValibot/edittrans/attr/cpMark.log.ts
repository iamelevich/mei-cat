import * as v from "valibot";
import {
	AttrControlEventSchema,
	AttrOctaveDisplacementSchema,
	AttrOriginLayerIdentSchema,
	AttrOriginStaffIdentSchema,
	AttrOriginStartEndIdSchema,
	AttrOriginTimestampLogSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "../../shared";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.cpMark.log.html
 */
export const AttrCpMarkLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrOctaveDisplacementSchema.entries,
	...AttrOriginLayerIdentSchema.entries,
	...AttrOriginStaffIdentSchema.entries,
	...AttrOriginStartEndIdSchema.entries,
	...AttrOriginTimestampLogSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,
});

export type AttrCpMarkLogData = v.InferOutput<typeof AttrCpMarkLogSchema>;
