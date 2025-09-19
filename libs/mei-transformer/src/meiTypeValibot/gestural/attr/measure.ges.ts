import * as v from "valibot";
import { AttrTimestampGesSchema } from "..";

/**
 * Gestural domain attributes. The tstamp.ges and tstamp.real attributes encode the onset time of the measure. In reality, this is usually the same as the onset time of the first event in the measure..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.measure.ges.html
 */
export const AttrMeasureGesSchema = v.object({
	// Inherited attribute classes
	...AttrTimestampGesSchema.entries,
});

export type AttrMeasureGesData = v.InferOutput<typeof AttrMeasureGesSchema>;
