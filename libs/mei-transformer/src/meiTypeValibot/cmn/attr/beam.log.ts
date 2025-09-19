import * as v from "valibot";
import { AttrEventSchema } from "../../shared";
import { AttrBeamedWithSchema } from "..";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beam.log.html
 */
export const AttrBeamLogSchema = v.object({
	// Inherited attribute classes
	...AttrBeamedWithSchema.entries,
	...AttrEventSchema.entries,
});

export type AttrBeamLogData = v.InferOutput<typeof AttrBeamLogSchema>;
