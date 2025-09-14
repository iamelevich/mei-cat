import { type Static, Type } from "@sinclair/typebox";

/**
 * Attributes for measurement units.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.measurement.html
 */
export const AttrMeasurementSchema = Type.Object(
	{
		/**
		 * Indicates the unit of measurement. Suggested values are: "byte", "char", "cm", "deg", "in", "issue", "ft", "m", "mm", "page", "pc", "pt", "px", "rad", "record", "vol", "vu"
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.measurement.html#unit
		 */
		"@unit": Type.Optional(
			Type.Union([
				Type.Literal("byte"),
				Type.Literal("char"),
				Type.Literal("cm"),
				Type.Literal("deg"),
				Type.Literal("in"),
				Type.Literal("issue"),
				Type.Literal("ft"),
				Type.Literal("m"),
				Type.Literal("mm"),
				Type.Literal("page"),
				Type.Literal("pc"),
				Type.Literal("pt"),
				Type.Literal("px"),
				Type.Literal("rad"),
				Type.Literal("record"),
				Type.Literal("vol"),
				Type.Literal("vu"),
			]),
		),
	},
	{ additionalProperties: false },
);

export type AttrMeasurement = Static<typeof AttrMeasurementSchema>;
