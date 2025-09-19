import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema, AttrCommonSchema, DescSchema } from "../../shared";
import { AttUsageSchema, TagUsageSchema } from ".";

/**
 * Base schema with attribute, to simplify types for NamespaceSchema
 */
const NamespaceBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,

	// Direct attributes
	/**
	 * Formal namespace identifier; that is, a uniform resource identifier (URI).
	 */
	"@name": v.optional(v.string()),
	/**
	 * Prefix associated with the formal identifier.
	 */
	"@prefix": v.optional(v.string()),
});

/**
 * Supplies the formal name of the namespace to which the elements documented by its children belong.
 * @see https://music-encoding.org/guidelines/v5/elements/namespace.html
 */
export const NamespaceSchema = v.intersect([
	NamespaceBaseSchema,
	v.object({
		/**
		 * Reference to element attUsage
		 * @see https://music-encoding.org/guidelines/v5/elements/attUsage.html
		 */
		attUsage: v.union([
			v.lazy(() => AttUsageSchema),
			v.array(v.lazy(() => AttUsageSchema)),
		]),
		/**
		 * Reference to element desc
		 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
		 */
		desc: v.optional(v.lazy(() => DescSchema)),
		/**
		 * Reference to element tagUsage
		 * @see https://music-encoding.org/guidelines/v5/elements/tagUsage.html
		 */
		tagUsage: v.union([
			v.lazy(() => TagUsageSchema),
			v.array(v.lazy(() => TagUsageSchema)),
		]),
	}),
]);

export type NamespaceData = v.InferOutput<typeof NamespaceSchema>;
