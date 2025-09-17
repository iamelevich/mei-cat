import { Type } from "typebox";
import { AttrRangingSchema } from "./ranging";

/**
 * Attributes that capture a measurement, count, or description.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.extent.html
 */
export const AttrExtentSchema = Type.Intersect([
	AttrRangingSchema,
	Type.Object(
		{
			/**
			 * Captures a measurement, count, or description.
			 * When extent contains a numeric value, use the unit attribute to indicate the measurement unit.
			 * Value is plain text.
			 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.extent.html#extent
			 */
			"@extent": Type.Optional(Type.String()),

			/**
			 * Indicates the unit of measurement.
			 * Suggested values are: "byte" _(Byte.)_, "char" _(Character.)_, "cm" _(Centimeter.)_, "deg" _(Degree.)_, "in" _(Inch.)_, "issue" _(Serial issue.)_, "ft" _(Foot.)_, "m" _(Meter.)_, "mm" _(Millimeter.)_, "page" _(Page.)_, "pc" _(Pica.)_, "pt" _(Point.)_, "px" _(Pixel.)_, "rad" _(Radian.)_, "record" _(Record.)_, "vol" _(Serial volume.)_, "vu" _(MEI virtual unit.)_
			 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.extent.html#unit
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
	),
]);
