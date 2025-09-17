import { Type } from "typebox";
import { AttrMeterConformanceBarSchema } from "./meterConformanceBar";

/**
 * Attributes for bar lines.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.barLine.log.html
 */
export const AttrBarLineLogSchema = Type.Intersect([
	Type.Object(
		{
			/**
			 * Records the appearance and usually the function of the bar line. Value conforms to data.BARRENDITION.
			 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.barLine.log.html
			 * @see https://music-encoding.org/guidelines/v5/data-types/data.BARRENDITION.html
			 */
			"@form": Type.Optional(Type.String()),
		},
		{ additionalProperties: false },
	),
	AttrMeterConformanceBarSchema,
]);
