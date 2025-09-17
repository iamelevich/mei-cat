import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrCoordinatedSchema } from "../shared/attr/coordinated";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";

/**
 * Defines an area of interest within a surface or graphic file.
 * @see https://music-encoding.org/guidelines/v5/elements/zone.html
 */
export const ZoneSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrCoordinatedSchema.entries,
	...AttrDataPointingSchema.entries,
});

export type ZoneData = v.InferOutput<typeof ZoneSchema>;
