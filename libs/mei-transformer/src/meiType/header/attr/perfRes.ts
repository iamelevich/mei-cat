import { type Static, Type } from "@sinclair/typebox";
import { AttrTranspositionSchema } from "../../shared/attr/transposition";
import { AttrAdlibitumSchema } from "./adlibitum";

/**
 * Attributes that define the characteristics and components of the performance resource or a performance resource list.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.perfRes.basic.html
 */
export const AttrPerfResBasicSchema = Type.Composite([
	AttrAdlibitumSchema,
	Type.Object({
		/**
		 * Indicates the number of performers.
		 * Value is a positive integer.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.perfRes.basic.html
		 */
		"@count": Type.Optional(
			Type.Integer({
				minimum: 0,
			}),
		),
	}),
]);

export type AttrPerfResBasic = Static<typeof AttrPerfResBasicSchema>;

/**
 * Attributes that define the characteristics and components of the performance resource.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.perfRes.html
 */
export const AttrPerfResSchema = Type.Composite([
	AttrPerfResBasicSchema,
	AttrTranspositionSchema,
	Type.Object({
		/**
		 * Use this attribute to identify the performance resource as a soloist especially in an accompanied work, such as a concerto or vocal solo.
		 * Value conforms to data.BOOLEAN.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.perfRes.html
		 */
		"@solo": Type.Optional(Type.Boolean()),
	}),
]);

export type AttrPerfRes = Static<typeof AttrPerfResSchema>;
