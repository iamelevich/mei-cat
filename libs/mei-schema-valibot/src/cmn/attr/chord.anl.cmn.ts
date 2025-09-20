import * as v from "valibot";
import { AttrOrnamPresentSchema } from "../../cmnOrnaments/attr/ornamPresent";
import { AttrFermataPresentSchema } from "../../shared/attr/fermataPresent";
import { AttrSlurPresentSchema } from "../../shared/attr/slurPresent";
import { AttrTiePresentSchema } from "../../shared/attr/tiePresent";
import { AttrTupletPresentSchema } from "../../shared/attr/tupletPresent";
import { AttrBeamPresentSchema } from "./beamPresent";
import { AttrLvPresentSchema } from "./lvPresent";

/**
 * Analytical domain attributes in the CMN repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chord.anl.cmn.html
 */
export const AttrChordAnlCmnSchema = v.object({
	// Inherited attribute classes
	...AttrBeamPresentSchema.entries,
	...AttrFermataPresentSchema.entries,
	...AttrLvPresentSchema.entries,
	...AttrOrnamPresentSchema.entries,
	...AttrSlurPresentSchema.entries,
	...AttrTiePresentSchema.entries,
	...AttrTupletPresentSchema.entries,
});

export type AttrChordAnlCmnData = v.InferOutput<typeof AttrChordAnlCmnSchema>;
