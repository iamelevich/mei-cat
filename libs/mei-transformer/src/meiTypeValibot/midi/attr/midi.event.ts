import * as v from "valibot";
import { AttrTimestampGesSchema } from "../../gestural/attr/timestamp.ges";
import { AttrLayerIdentSchema } from "../../shared/attr/layerIdent";
import { AttrPartIdentSchema } from "../../shared/attr/partIdent";
import { AttrStaffIdentSchema } from "../../shared/attr/staffIdent";
import { AttrTimestampLogSchema } from "../../shared/attr/timestamp.log";

/**
 * Attributes common to MIDI events..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midi.event.html
 */
export const AttrMidiEventSchema = v.object({
	// Inherited attribute classes
	...AttrLayerIdentSchema.entries,
	...AttrPartIdentSchema.entries,
	...AttrStaffIdentSchema.entries,
	...AttrTimestampGesSchema.entries,
	...AttrTimestampLogSchema.entries,
});

export type AttrMidiEventData = v.InferOutput<typeof AttrMidiEventSchema>;
