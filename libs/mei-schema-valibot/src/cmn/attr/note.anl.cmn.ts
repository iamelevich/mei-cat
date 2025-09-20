import * as v from "valibot";
import { AttrOrnamPresentSchema } from "../../cmnOrnaments/attr/ornamPresent";
import { AttrSlurPresentSchema } from "../../shared/attr/slurPresent";
import { AttrSylTextSchema } from "../../shared/attr/sylText";
import { AttrTiePresentSchema } from "../../shared/attr/tiePresent";
import { AttrTupletPresentSchema } from "../../shared/attr/tupletPresent";
import { AttrBeamPresentSchema } from "./beamPresent";
import { AttrGlissPresentSchema } from "./glissPresent";
import { AttrLvPresentSchema } from "./lvPresent";

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
