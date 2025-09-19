import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDataPointingSchema } from "../../shared/attr/dataPointing";
import { MacroAvailabilityPartSchema } from "../macro/availabilityPart";

/**
 * Base schema with attribute, to simplify types for AvailabilitySchema
 */
const AvailabilityBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
});

/**
 * Groups elements that describe the availability of and access to a bibliographic item, including an MEI-encoded document.
 * @see https://music-encoding.org/guidelines/v5/elements/availability.html
 */
export const AvailabilitySchema = v.lazy(() =>
	v.intersect([AvailabilityBaseSchema, MacroAvailabilityPartSchema]),
);

export type AvailabilityData = v.InferOutput<typeof AvailabilitySchema>;
