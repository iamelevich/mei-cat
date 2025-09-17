import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Container for one or more hand elements.
 * @see https://music-encoding.org/guidelines/v5/elements/handList.html
 */
export const HandListSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	Type.Object(
		{
			// model.headLike elements
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),
			// Zero or more sequences of (optional label followed by hand)
			/**
			 * A container for document text that identifies the feature to which it is attached. For a "tool tip" or other generated label, use the label attribute.
			 * @see https://music-encoding.org/guidelines/v5/elements/label.html
			 */
			label: Type.Optional(
				Type.Union([Type.Ref("label"), Type.Array(Type.Ref("label"))]),
			),
			/**
			 * Defines a distinct scribe or handwriting style.
			 * @see https://music-encoding.org/guidelines/v5/elements/hand.html
			 */
			hand: Type.Optional(
				Type.Union([Type.Ref("hand"), Type.Array(Type.Ref("hand"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
