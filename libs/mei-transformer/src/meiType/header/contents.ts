import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrPointingSchema } from "../shared/attr/pointing";

/**
 * List of the material contained within a resource.
 * @see https://music-encoding.org/guidelines/v5/elements/contents.html
 */
export const ContentsSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrPointingSchema,
	Type.Object(
		{
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),
			/**
			 * One or more text phrases that form a logical prose passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([Type.Ref("p"), Type.Array(Type.Ref("p"))])),
			/**
			 * A container for document text that identifies the feature to which it is attached. For a "tool tip" or other generated label, use the label attribute.
			 * @see https://music-encoding.org/guidelines/v5/elements/label.html
			 */
			label: Type.Optional(
				Type.Union([Type.Ref("label"), Type.Array(Type.Ref("label"))]),
			),
			/**
			 * Contains a single entry within a content description element.
			 * @see https://music-encoding.org/guidelines/v5/elements/contentItem.html
			 */
			contentItem: Type.Optional(
				Type.Union([
					Type.Ref("contentItem"),
					Type.Array(Type.Ref("contentItem")),
				]),
			),
		},
		{ additionalProperties: false },
	),
]);
