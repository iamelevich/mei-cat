import * as v from "valibot";
import { AttrBeamRendSchema } from "../../cmn/attr/beamRend";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrCueSchema } from "../../shared/attr/cue";
import { AttrVisibilitySchema } from "../../shared/attr/visibility";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beam.vis.html
 */
export const AttrBeamVisSchema = v.object({
	// Inherited attribute classes
	...AttrBeamRendSchema.entries,
	...AttrColorSchema.entries,
	...AttrCueSchema.entries,
	...AttrVisibilitySchema.entries,
});

export type AttrBeamVisData = v.InferOutput<typeof AttrBeamVisSchema>;
