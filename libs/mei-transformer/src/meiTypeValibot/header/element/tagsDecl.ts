import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	DescSchema,
	ModelHeadLikeSchema,
} from "../../shared";
import { NamespaceSchema } from ".";

/**
 * Base schema with attribute, to simplify types for TagsDeclSchema
 */
const TagsDeclBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Provides detailed information about the tagging applied to a document.
 * @see https://music-encoding.org/guidelines/v5/elements/tagsDecl.html
 */
export const TagsDeclSchema = v.intersect([
	TagsDeclBaseSchema,
	v.object({
		/**
		 * Reference to element desc
		 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
		 */
		desc: v.optional(v.lazy(() => DescSchema)),
		/**
		 * Reference to element namespace
		 * @see https://music-encoding.org/guidelines/v5/elements/namespace.html
		 */
		namespace: v.optional(
			v.union([
				v.lazy(() => NamespaceSchema),
				v.array(v.lazy(() => NamespaceSchema)),
			]),
		),
	}),
	ModelHeadLikeSchema,
]);

export type TagsDeclData = v.InferOutput<typeof TagsDeclSchema>;
