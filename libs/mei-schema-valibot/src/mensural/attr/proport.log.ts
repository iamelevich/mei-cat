import * as v from "valibot";
import { AttrDurationRatioSchema } from "../../shared/attr/duration.ratio";

/**
 * Logical domain attributes. These attributes describe augmentation or diminution of the normal value of the notes in mensural notation as a ratio..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.proport.log.html
 */
export const AttrProportLogSchema = v.object({
	// Inherited attribute classes
	...AttrDurationRatioSchema.entries,
});

export type AttrProportLogData = v.InferOutput<typeof AttrProportLogSchema>;
