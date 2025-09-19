import * as v from "valibot";
import { AttrFermataPresentSchema } from "../../shared/attr/fermataPresent";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabGrp.anl.html
 */
export const AttrTabGrpAnlSchema = v.object({
	// Inherited attribute classes
	...AttrFermataPresentSchema.entries,
});

export type AttrTabGrpAnlData = v.InferOutput<typeof AttrTabGrpAnlSchema>;
