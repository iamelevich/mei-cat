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
 * Logical domain attributes for cpMark.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.cpMark.log.html
 */
export const AttrCpMarkLogSchema = v.object({
	...AttrControlEventSchema.entries,
	...AttrOriginTimestampLogSchema.entries,
	...AttrOriginStaffIdentSchema.entries,
	...AttrOriginLayerIdentSchema.entries,
	...AttrOriginStartEndIdSchema.entries,
	...AttrOctaveDisplacementSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,
});

export type AttrCpMarkLogData = v.InferOutput<typeof AttrCpMarkLogSchema>;
