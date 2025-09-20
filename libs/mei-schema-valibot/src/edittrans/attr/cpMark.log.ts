import * as v from "valibot";
import { AttrControlEventSchema } from "../../shared/attr/controlEvent";
import { AttrOctaveDisplacementSchema } from "../../shared/attr/octaveDisplacement";
import { AttrOriginLayerIdentSchema } from "../../shared/attr/origin.layerIdent";
import { AttrOriginStaffIdentSchema } from "../../shared/attr/origin.staffIdent";
import { AttrOriginStartEndIdSchema } from "../../shared/attr/origin.startEndId";
import { AttrOriginTimestampLogSchema } from "../../shared/attr/origin.timestamp.log";
import { AttrStartEndIdSchema } from "../../shared/attr/startEndId";
import { AttrTimestamp2LogSchema } from "../../shared/attr/timestamp2.log";

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
