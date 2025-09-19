import * as v from "valibot";
import { AttrEventSchema } from "../attr/event";
import { AttrWidthSchema } from "../attr/width";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pad.log.html
 */
export const AttrPadLogSchema = v.object({
	// Inherited attribute classes
	...AttrEventSchema.entries,
	...AttrWidthSchema.entries,
});

export type AttrPadLogData = v.InferOutput<typeof AttrPadLogSchema>;
