import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Documents the usage of a specific attribute of the element.
 * @see https://music-encoding.org/guidelines/v5/elements/attUsage.html
 */
export const AttUsageSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	Type.Object(
		{
			/**
			 * Name of the attribute.
			 * @see https://music-encoding.org/guidelines/v5/elements/attUsage.html#name
			 */
			name: Type.String(),
			/**
			 * Circumstances in which the attribute appears, an XPath expression.
			 * @see https://music-encoding.org/guidelines/v5/elements/attUsage.html#context
			 */
			context: Type.Optional(Type.String()),
			/**
			 * Container for text that briefly describes the feature to which it is attached, including its intended usage, purpose, or application as appropriate.
			 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
			 */
			desc: Type.Optional(Type.Ref("desc")),
		},
		{ additionalProperties: false },
	),
]);
