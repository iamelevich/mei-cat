import * as v from "valibot";

/**
 * Attributes pertaining to layout optimization..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.optimization.html
 */
export const AttrOptimizationSchema = v.object({
	// Direct attributes
	/**
	 * Indicates whether staves without notes, rests, etc. should be displayed. When the value is 'true', empty staves are not displayed.
	 */
	"@optimize": v.optional(v.string()),
});

export type AttrOptimizationData = v.InferOutput<typeof AttrOptimizationSchema>;
