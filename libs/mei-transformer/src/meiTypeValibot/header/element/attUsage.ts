import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema, AttrCommonSchema, DescSchema } from "../../shared";

/**
 * Base schema with attribute, to simplify types for AttUsageSchema
 */
const AttUsageBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,

	// Direct attributes
	/**
	 * Circumstances in which the attribute appears, an XPath expression.
	 */
	"@context": v.optional(v.string()),
	/**
	 * Name of the attribute.
	 */
	"@name": v.optional(v.string()),
});

/**
 * Documents the usage of a specific attribute of the element.
 * @see https://music-encoding.org/guidelines/v5/elements/attUsage.html
 */
export const AttUsageSchema = v.intersect([
	AttUsageBaseSchema,
	v.object({
		/**
		 * Reference to element desc
		 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
		 */
		desc: v.optional(v.lazy(() => DescSchema)),
	}),
]);

export type AttUsageData = v.InferOutput<typeof AttUsageSchema>;
