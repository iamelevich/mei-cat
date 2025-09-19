import * as v from "valibot";
import { AttrFermataPresentSchema } from "../../shared/attr/fermataPresent";
import { AttrTupletPresentSchema } from "../../shared/attr/tupletPresent";
import { AttrBeamPresentSchema } from "../attr/beamPresent";

/**
 * Analytical domain attributes in the CMN repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rest.anl.cmn.html
 */
export const AttrRestAnlCmnSchema = v.object({
	// Inherited attribute classes
	...AttrBeamPresentSchema.entries,
	...AttrFermataPresentSchema.entries,
	...AttrTupletPresentSchema.entries,
});

export type AttrRestAnlCmnData = v.InferOutput<typeof AttrRestAnlCmnSchema>;
