import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { DescSchema } from "../shared/desc";
import { AttUsageSchema } from "./attUsage";

/**
 * Documents the usage of a specific element within the document.
 * @see https://music-encoding.org/guidelines/v5/elements/tagUsage.html
 */
export const TagUsageSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	Type.Object(
		{
			// Attributes
			/**
			 * Name of the element.
			 * Value conforms to data.NMTOKEN.
			 * @see https://music-encoding.org/guidelines/v5/elements/tagUsage.html#name
			 */
			"@name": Type.String(),
			/**
			 * Circumstances in which the element appears, an XPath expression.
			 * @see https://music-encoding.org/guidelines/v5/elements/tagUsage.html#context
			 */
			"@context": Type.Optional(Type.String()),
			/**
			 * Number of occurrences in the defined context.
			 * Non-negative integer.
			 * @see https://music-encoding.org/guidelines/v5/elements/tagUsage.html#occurs
			 */
			"@occurs": Type.Optional(Type.Number()),
			/**
			 * Number of occurrences in the defined context that have an xml:id attribute.
			 * Non-negative integer.
			 * @see https://music-encoding.org/guidelines/v5/elements/tagUsage.html#withid
			 */
			"@withid": Type.Optional(Type.Number()),
			// Children
			/**
			 * Container for text that briefly describes the feature to which it is attached, including its intended usage, purpose, or application as appropriate.
			 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
			 */
			desc: Type.Optional(DescSchema),
			/**
			 * Documents the usage of a specific attribute of the element.
			 * @see https://music-encoding.org/guidelines/v5/elements/attUsage.html
			 */
			attUsage: Type.Optional(
				Type.Union([AttUsageSchema, Type.Array(AttUsageSchema)]),
			),
		},
		{ additionalProperties: false },
	),
]);

export type TagUsage = Static<typeof TagUsageSchema>;
