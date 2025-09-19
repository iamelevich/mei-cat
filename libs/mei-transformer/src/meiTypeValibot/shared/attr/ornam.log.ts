import * as v from "valibot";
import { AttrOrnamentAccidSchema } from "../../cmnOrnaments/attr/ornamentAccid";
import { AttrControlEventSchema } from "../attr/controlEvent";
import { AttrDurationAdditiveSchema } from "../attr/duration.additive";
import { AttrStartEndIdSchema } from "../attr/startEndId";
import { AttrTimestamp2LogSchema } from "../attr/timestamp2.log";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ornam.log.html
 */
export const AttrOrnamLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrOrnamentAccidSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,
});

export type AttrOrnamLogData = v.InferOutput<typeof AttrOrnamLogSchema>;
