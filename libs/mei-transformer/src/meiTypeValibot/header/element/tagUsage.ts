import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { DescSchema } from "../../shared/element/desc";
import { AttUsageSchema } from "../element/attUsage";

/**
 * Base schema with attribute, to simplify types for TagUsageSchema
 */
const TagUsageBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,

	// Direct attributes
	/**
	 * Circumstances in which the element appears, an XPath expression.
	 */
	"@context": v.optional(v.string()),
	/**
	 * Name of the element.
	 */
	"@name": v.optional(v.string()),
	/**
	 * Number of occurrences in the defined context.
	 */
	"@occurs": v.optional(v.string()),
	/**
	 * Number of occurrences in the defined context that have an <att>xml:id</att> attribute.
	 */
	"@withid": v.optional(v.string()),
});

/**
 * Documents the usage of a specific element within the document.
 * @see https://music-encoding.org/guidelines/v5/elements/tagUsage.html
 */
export const TagUsageSchema = v.lazy(() =>
	v.intersect([
		TagUsageBaseSchema,
		v.object({
			/**
			 * Reference to element attUsage
			 * @see https://music-encoding.org/guidelines/v5/elements/attUsage.html
			 */
			attUsage: v.optional(v.union([AttUsageSchema, v.array(AttUsageSchema)])),
			/**
			 * Reference to element desc
			 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
			 */
			desc: v.optional(DescSchema),
		}),
	]),
);

export type TagUsageData = v.InferOutput<typeof TagUsageSchema>;
