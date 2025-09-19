import * as v from "valibot";
import { AttrBeamPresentSchema } from "..";
import {
	AttrFermataPresentSchema,
	AttrTupletPresentSchema,
} from "../../shared";

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
