import * as v from "valibot";
import {
	AttrFermataPresentSchema,
	AttrTupletPresentSchema,
} from "../../shared";
import { AttrBeamPresentSchema } from "..";

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
