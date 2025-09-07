import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { DescSchema } from "../shared/desc";
import { HeadSchema } from "../shared/head";
import { NamespaceSchema } from "./namespace";

/**
 * Provides detailed information about the tagging applied to a document.
 * @see https://music-encoding.org/guidelines/v5/elements/tagsDecl.html
 */
export const TagsDeclSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	Type.Object(
		{
			// Zero or more model.headLike
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
			// Optional desc
			/**
			 * Container for text that briefly describes the feature to which it is attached, including its intended usage, purpose, or application as appropriate.
			 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
			 */
			desc: Type.Optional(DescSchema),
			// Zero or more namespace
			/**
			 * Supplies the formal name of the namespace to which the elements documented by its children belong.
			 * @see https://music-encoding.org/guidelines/v5/elements/namespace.html
			 */
			namespace: Type.Optional(
				Type.Union([NamespaceSchema, Type.Array(NamespaceSchema)]),
			),
		},
		{ additionalProperties: false },
	),
]);

export type TagsDecl = Static<typeof TagsDeclSchema>;
