import * as v from "valibot";
import {
	AttrFermataPresentSchema,
	AttrTupletPresentSchema,
} from "../../shared";
import { AttrBeamPresentSchema } from "..";

/**
 * Analytical domain attributes in the CMN repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.space.anl.cmn.html
 */
export const AttrSpaceAnlCmnSchema = v.object({
	// Inherited attribute classes
	...AttrBeamPresentSchema.entries,
	...AttrFermataPresentSchema.entries,
	...AttrTupletPresentSchema.entries,
});

export type AttrSpaceAnlCmnData = v.InferOutput<typeof AttrSpaceAnlCmnSchema>;
