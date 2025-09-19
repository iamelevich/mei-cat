import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { DescSchema } from "../../shared/element/desc";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { NamespaceSchema } from "../element/namespace";

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
export const TagsDeclSchema = v.lazy(() =>
	v.intersect([
		TagsDeclBaseSchema,
		v.object({
			/**
			 * Reference to element desc
			 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
			 */
			desc: v.optional(DescSchema),
			/**
			 * Reference to element namespace
			 * @see https://music-encoding.org/guidelines/v5/elements/namespace.html
			 */
			namespace: v.optional(
				v.union([NamespaceSchema, v.array(NamespaceSchema)]),
			),
		}),
		ModelHeadLikeSchema,
	]),
);

export type TagsDeclData = v.InferOutput<typeof TagsDeclSchema>;
