import * as v from "valibot";
import { AttrTimestamp2GesSchema } from "./timestamp2.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lv.ges.html
 */
export const AttrLvGesSchema = v.object({
	// Inherited attribute classes
	...AttrTimestamp2GesSchema.entries,
});

export type AttrLvGesData = v.InferOutput<typeof AttrLvGesSchema>;
