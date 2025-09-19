import * as v from "valibot";
import { AttrFermataPresentSchema } from "../../shared";

/**
 * Analytical domain attributes in the CMN repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRest.anl.html
 */
export const AttrMRestAnlSchema = v.object({
	// Inherited attribute classes
	...AttrFermataPresentSchema.entries,
});

export type AttrMRestAnlData = v.InferOutput<typeof AttrMRestAnlSchema>;
