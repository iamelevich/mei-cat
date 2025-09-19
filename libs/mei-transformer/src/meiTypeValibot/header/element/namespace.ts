import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { DescSchema } from "../../shared/element/desc";
import { AttUsageSchema } from "../element/attUsage";
import { TagUsageSchema } from "../element/tagUsage";

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
export const NamespaceSchema = v.lazy(() =>
	v.intersect([
		NamespaceBaseSchema,
		v.object({
			/**
			 * Reference to element attUsage
			 * @see https://music-encoding.org/guidelines/v5/elements/attUsage.html
			 */
			attUsage: v.union([v.array(AttUsageSchema), AttUsageSchema]),
			/**
			 * Reference to element desc
			 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
			 */
			desc: v.optional(DescSchema),
			/**
			 * Reference to element tagUsage
			 * @see https://music-encoding.org/guidelines/v5/elements/tagUsage.html
			 */
			tagUsage: v.union([v.array(TagUsageSchema), TagUsageSchema]),
		}),
	]),
);

export type NamespaceData = v.InferOutput<typeof NamespaceSchema>;
