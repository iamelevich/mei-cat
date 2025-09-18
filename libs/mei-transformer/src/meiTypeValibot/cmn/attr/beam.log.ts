import * as v from "valibot";
import { AttrEventSchema } from "../../shared";
import { AttrBeamedWithSchema } from "./beamedWith";

/**
 * Logical domain attributes.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beam.log.html
 */
export const AttrBeamLogSchema = v.object({
	...AttrEventSchema.entries,
	...AttrBeamedWithSchema.entries,
});

export type AttrBeamLogData = v.InferOutput<typeof AttrBeamLogSchema>;
