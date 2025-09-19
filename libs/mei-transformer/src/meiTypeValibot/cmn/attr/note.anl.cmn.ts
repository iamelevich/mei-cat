import * as v from "valibot";
import { AttrOrnamPresentSchema } from "../../cmnOrnaments";
import {
	AttrSlurPresentSchema,
	AttrSylTextSchema,
	AttrTiePresentSchema,
	AttrTupletPresentSchema,
} from "../../shared";
import {
	AttrBeamPresentSchema,
	AttrGlissPresentSchema,
	AttrLvPresentSchema,
} from "..";

/**
 * Analytical domain attributes in the CMN repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.anl.cmn.html
 */
export const AttrNoteAnlCmnSchema = v.object({
	// Inherited attribute classes
	...AttrBeamPresentSchema.entries,
	...AttrGlissPresentSchema.entries,
	...AttrLvPresentSchema.entries,
	...AttrOrnamPresentSchema.entries,
	...AttrSlurPresentSchema.entries,
	...AttrSylTextSchema.entries,
	...AttrTiePresentSchema.entries,
	...AttrTupletPresentSchema.entries,
});

export type AttrNoteAnlCmnData = v.InferOutput<typeof AttrNoteAnlCmnSchema>;
