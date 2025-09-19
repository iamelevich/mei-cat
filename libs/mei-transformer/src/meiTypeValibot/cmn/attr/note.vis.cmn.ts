import * as v from "valibot";
import { AttrBeamSecondarySchema } from "..";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.vis.cmn.html
 */
export const AttrNoteVisCmnSchema = v.object({
	// Inherited attribute classes
	...AttrBeamSecondarySchema.entries,
});

export type AttrNoteVisCmnData = v.InferOutput<typeof AttrNoteVisCmnSchema>;
