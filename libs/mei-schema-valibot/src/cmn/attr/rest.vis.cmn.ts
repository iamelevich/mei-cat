import * as v from "valibot";
import { AttrBeamSecondarySchema } from "./beamSecondary";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rest.vis.cmn.html
 */
export const AttrRestVisCmnSchema = v.object({
	// Inherited attribute classes
	...AttrBeamSecondarySchema.entries,
});

export type AttrRestVisCmnData = v.InferOutput<typeof AttrRestVisCmnSchema>;
