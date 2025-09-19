import * as v from "valibot";
import { AttrLayerIdentSchema } from "../attr/layerIdent";
import { AttrPartIdentSchema } from "../attr/partIdent";
import { AttrStaffIdentSchema } from "../attr/staffIdent";
import { AttrStartIdSchema } from "../attr/startId";
import { AttrTimestampLogSchema } from "../attr/timestamp.log";

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
