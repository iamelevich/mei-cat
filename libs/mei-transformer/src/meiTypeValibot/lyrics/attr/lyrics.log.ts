import * as v from "valibot";
import {
	AttrLayerIdentSchema,
	AttrPartIdentSchema,
	AttrStaffIdentSchema,
} from "../../shared";

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
