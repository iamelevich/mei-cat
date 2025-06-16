import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";

/**
 * Attributes that provide information about a measure's conformance to the prevailing meter.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterConformance.bar.html
 */
export const AttrMeterConformanceBarSchema = Type.Object(
	{
		/**
		 * Indicates the relationship between the content of a measure and the prevailing meter.
		 * Value conforms to data.BOOLEAN.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterConformance.bar.html
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.BOOLEAN.html
		 */
		"@metcon": Type.Optional(Type.Boolean()),
		/**
		 * Indicates whether or not a bar line is "controlling"; that is, if it indicates a point of alignment across all the parts.
		 * Bar lines within a score are usually controlling; that is, they "line up".
		 * Bar lines within parts may or may not be controlling.
		 * When applied to measure, this attribute indicates the nature of the right bar line but not the left.
		 * Value conforms to data.BOOLEAN.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterConformance.bar.html
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.BOOLEAN.html
		 */
		"@control": Type.Optional(Type.Boolean()),
	},
	{ additionalProperties: false },
);

export type AttrMeterConformanceBar = Static<
	typeof AttrMeterConformanceBarSchema
>;
