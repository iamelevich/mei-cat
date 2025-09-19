import * as v from "valibot";
import { AttrLayerIdentSchema } from "../../shared/attr/layerIdent";
import { AttrPartIdentSchema } from "../../shared/attr/partIdent";
import { AttrStaffIdentSchema } from "../../shared/attr/staffIdent";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.midi.log.html
 */
export const AttrMidiLogSchema = v.object({
	// Inherited attribute classes
	...AttrLayerIdentSchema.entries,
	...AttrPartIdentSchema.entries,
	...AttrStaffIdentSchema.entries,
});

export type AttrMidiLogData = v.InferOutput<typeof AttrMidiLogSchema>;
