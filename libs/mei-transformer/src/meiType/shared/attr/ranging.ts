import { Type } from "typebox";

/**
 * Attributes that capture a measurement, count, or description with range information.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ranging.html
 */
export const AttrRangingSchema = Type.Object(
	{
		/**
		 * Gives a minimum estimated value for an approximate measurement.
		 * Value is a decimal number.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ranging.html#atleast
		 */
		"@atleast": Type.Optional(Type.Number()),

		/**
		 * Gives a maximum estimated value for an approximate measurement.
		 * Value is a decimal number.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ranging.html#atmost
		 */
		"@atmost": Type.Optional(Type.Number()),

		/**
		 * Specifies the degree of statistical confidence (between zero and one) that a value falls within the range specified by min and max, or the proportion of observed values that fall within that range.
		 * Value conforms to data.CONFIDENCE.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ranging.html#confidence
		 */
		"@confidence": Type.Optional(Type.Number({ minimum: 0, maximum: 1 })),

		/**
		 * Where the measurement summarizes more than one observation or a range of values, supplies the maximum value observed.
		 * Value is a decimal number.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ranging.html#max
		 */
		"@max": Type.Optional(Type.Number()),

		/**
		 * Where the measurement summarizes more than one observation or a range of values, supplies the minimum value observed.
		 * Value is a decimal number.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ranging.html#min
		 */
		"@min": Type.Optional(Type.Number()),
	},
	{ additionalProperties: false },
);
