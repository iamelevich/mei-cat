import * as v from "valibot";
import { AttrVisualOffsetHoSchema } from "../attr/visualOffset.ho";
import { AttrVisualOffsetToSchema } from "../attr/visualOffset.to";
import { AttrVisualOffsetVoSchema } from "../attr/visualOffset.vo";

/**
 * Visual offset attributes. Some items may have their location recorded in terms of offsets from their programmatically-determined location. The ho attribute records the horizontal offset while vo records the vertical. The to attribute holds a timestamp offset, the most common use of which is as an alternative to the ho attribute..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset.html
 */
export const AttrVisualOffsetSchema = v.object({
	// Inherited attribute classes
	...AttrVisualOffsetHoSchema.entries,
	...AttrVisualOffsetToSchema.entries,
	...AttrVisualOffsetVoSchema.entries,
});

export type AttrVisualOffsetData = v.InferOutput<typeof AttrVisualOffsetSchema>;
