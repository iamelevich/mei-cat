import * as v from "valibot";
import { AttrLayerIdentSchema } from "../../shared/attr/layerIdent";
import { AttrPartIdentSchema } from "../../shared/attr/partIdent";
import { AttrStaffIdentSchema } from "../../shared/attr/staffIdent";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lyrics.log.html
 */
export const AttrLyricsLogSchema = v.object({
	// Inherited attribute classes
	...AttrLayerIdentSchema.entries,
	...AttrPartIdentSchema.entries,
	...AttrStaffIdentSchema.entries,
});

export type AttrLyricsLogData = v.InferOutput<typeof AttrLyricsLogSchema>;
