import { type Static, Type } from "@sinclair/typebox";

/**
 * Logical attributes for meter signature.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSig.log.html
 */
export const AttrMeterSigLogSchema = Type.Object(
	{
		/**
		 * Captures the number of beats in a measure, that is, the top number of the meter signature.
		 * It must contain a decimal number or an expression that evaluates to a decimal number, such as 2+3 or 3*2.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSig.log.html#count
		 */
		"@count": Type.Optional(Type.String()),
		/**
		 * Indicates the use of a meter symbol instead of a numeric meter signature, that is, 'C' for common time or 'C' with a slash for cut time.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSig.log.html#sym
		 */
		"@sym": Type.Optional(Type.String()),
		/**
		 * Contains the number indicating the beat unit, that is, the bottom number of the meter signature.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSig.log.html#unit
		 */
		"@unit": Type.Optional(Type.Number()),
	},
	{ additionalProperties: false },
);

export type AttrMeterSigLog = Static<typeof AttrMeterSigLogSchema>;
