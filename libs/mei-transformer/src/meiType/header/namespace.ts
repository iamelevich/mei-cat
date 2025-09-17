import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Supplies the formal name of the namespace to which the elements documented by its children belong.
 * @see https://music-encoding.org/guidelines/v5/elements/namespace.html
 */
export const NamespaceSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	Type.Object(
		{
			/**
			 * Formal namespace identifier; that is, a uniform resource identifier (URI).
			 * Value conforms to data.URI.
			 * @see https://music-encoding.org/guidelines/v5/elements/namespace.html#name
			 * @see https://music-encoding.org/guidelines/v5/data-types/data.URI.html
			 */
			"@name": Type.String(),
			/**
			 * Prefix associated with the formal identifier.
			 * Value conforms to data.NMTOKEN.
			 * @see https://music-encoding.org/guidelines/v5/elements/namespace.html#prefix
			 * @see https://music-encoding.org/guidelines/v5/data-types/data.NMTOKEN.html
			 */
			"@prefix": Type.Optional(Type.String()),
			// Optional desc element
			/**
			 * Container for text that briefly describes the feature to which it is attached, including its intended usage, purpose, or application as appropriate.
			 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
			 */
			desc: Type.Optional(Type.Ref("desc")),
			// Choice: one or more tagUsage OR one or more attUsage
			/**
			 * Documents the usage of a specific element within the document.
			 * @see https://music-encoding.org/guidelines/v5/elements/tagUsage.html
			 */
			tagUsage: Type.Optional(
				Type.Union([Type.Ref("tagUsage"), Type.Array(Type.Ref("tagUsage"))]),
			),
			/**
			 * Documents the usage of a specific attribute of the element.
			 * @see https://music-encoding.org/guidelines/v5/elements/attUsage.html
			 */
			attUsage: Type.Optional(
				Type.Union([Type.Ref("attUsage"), Type.Array(Type.Ref("attUsage"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
