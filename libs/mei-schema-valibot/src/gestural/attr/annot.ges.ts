import * as v from "valibot";
import { AttrDurationGesSchema } from "./duration.ges";
import { AttrTimestampGesSchema } from "./timestamp.ges";
import { AttrTimestamp2GesSchema } from "./timestamp2.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.annot.ges.html
 */
export const AttrAnnotGesSchema = v.object({
	// Inherited attribute classes
	...AttrDurationGesSchema.entries,
	...AttrTimestampGesSchema.entries,
	...AttrTimestamp2GesSchema.entries,
});

export type AttrAnnotGesData = v.InferOutput<typeof AttrAnnotGesSchema>;
