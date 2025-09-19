import * as v from "valibot";
import { AttrLayerIdentSchema, AttrPartIdentSchema } from "../../shared";

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
