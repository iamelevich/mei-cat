import * as v from "valibot";
import { AttrBeamVisSchema } from "./beam.vis";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamSpan.vis.html
 */
export const AttrBeamSpanVisSchema = v.object({
	// Inherited attribute classes
	...AttrBeamVisSchema.entries,
});

export type AttrBeamSpanVisData = v.InferOutput<typeof AttrBeamSpanVisSchema>;
