import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDataPointingSchema } from "../../shared/attr/dataPointing";
import { ExtDataSchema } from "../../shared/element/extData";

/**
 * Base schema with attribute, to simplify types for WhenSchema
 */
const WhenBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,

	// Direct attributes
	/**
	 * Provides an absolute value for the time point.
	 */
	"@absolute": v.optional(v.string()),
	/**
	 * Specifies the kind of values used in the absolute attribute.
	 */
	"@abstype": v.optional(v.string()),
	/**
	 * Specifies the time interval between this time point and the one designated by the since attribute. This attribute can only be interpreted meaningfully in conjunction with the inttype attribute.
	 */
	"@interval": v.optional(v.string()),
	/**
	 * Specifies the kind of values used in the interval attribute.
	 */
	"@inttype": v.optional(v.string()),
	/**
	 * Identifies the reference point for determining the time of the current when element, which is obtained by adding the interval to the time of the reference point. The value should be the ID of another when element within the same parent element. If the since attribute is omitted and the absolute attribute is not specified, then the reference point is understood to be the immediately preceding when element.
	 */
	"@since": v.optional(v.string()),
});

/**
 * Indicates a point in time either absolutely (using the absolute attribute), or relative to another when element (using the since, interval and inttype attributes).
 * @see https://music-encoding.org/guidelines/v5/elements/when.html
 */
export const WhenSchema = v.lazy(() =>
	v.intersect([
		WhenBaseSchema,
		v.object({
			/**
			 * Reference to element extData
			 * @see https://music-encoding.org/guidelines/v5/elements/extData.html
			 */
			extData: v.optional(v.union([ExtDataSchema, v.array(ExtDataSchema)])),
		}),
	]),
);

export type WhenData = v.InferOutput<typeof WhenSchema>;
