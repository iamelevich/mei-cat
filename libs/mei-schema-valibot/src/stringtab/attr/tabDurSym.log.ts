import * as v from "valibot";
import { AttrLayerIdentSchema } from "../../shared/attr/layerIdent";
import { AttrPartIdentSchema } from "../../shared/attr/partIdent";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabDurSym.log.html
 */
export const AttrTabDurSymLogSchema = v.object({
	// Inherited attribute classes
	...AttrLayerIdentSchema.entries,
	...AttrPartIdentSchema.entries,
});

export type AttrTabDurSymLogData = v.InferOutput<typeof AttrTabDurSymLogSchema>;
