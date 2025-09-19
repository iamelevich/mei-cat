import * as v from "valibot";
import { AttrOrnamPresentSchema } from "../../cmnOrnaments";
import {
	AttrFermataPresentSchema,
	AttrSlurPresentSchema,
	AttrTiePresentSchema,
	AttrTupletPresentSchema,
} from "../../shared";
import { AttrBeamPresentSchema, AttrLvPresentSchema } from "..";

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
