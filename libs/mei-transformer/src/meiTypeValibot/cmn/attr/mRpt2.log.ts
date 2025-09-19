import * as v from "valibot";
import { AttrEventSchema } from "../../shared";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRpt2.log.html
 */
export const AttrMRpt2LogSchema = v.object({
	// Inherited attribute classes
	...AttrEventSchema.entries,
});

export type AttrMRpt2LogData = v.InferOutput<typeof AttrMRpt2LogSchema>;
