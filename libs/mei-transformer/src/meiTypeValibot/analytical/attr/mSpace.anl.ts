import * as v from "valibot";
import { AttrFermataPresentSchema } from "../../shared";

/**
 * Analytical domain attributes in the CMN repertoire. Use the n attribute to explicitly encode this measure’s position in a string of measures containing only <gi scheme="MEI" >mRest</gi> elements..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mSpace.anl.html
 */
export const AttrMSpaceAnlSchema = v.object({
	// Inherited attribute classes
	...AttrFermataPresentSchema.entries,
});

export type AttrMSpaceAnlData = v.InferOutput<typeof AttrMSpaceAnlSchema>;
