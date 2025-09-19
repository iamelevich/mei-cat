import * as v from "valibot";
import { AttrTimestampGesSchema } from "../attr/timestamp.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ncGrp.ges.html
 */
export const AttrNcGrpGesSchema = v.object({
	// Inherited attribute classes
	...AttrTimestampGesSchema.entries,
});

export type AttrNcGrpGesData = v.InferOutput<typeof AttrNcGrpGesSchema>;
