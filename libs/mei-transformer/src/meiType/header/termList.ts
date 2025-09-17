import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrPointingSchema } from "../shared/attr/pointing";

/**
 * Collection of text phrases which describe a resource.
 * @see https://music-encoding.org/guidelines/v5/elements/termList.html
 */
export const TermListSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrPointingSchema,
	Type.Object(
		{
			// Zero or more model.headLike
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),
			// Zero or more (optional label, term) pairs
			/**
			 * A container for document text that identifies the feature to which it is attached. For a "tool tip" or other generated label, use the label attribute.
			 * @see https://music-encoding.org/guidelines/v5/elements/label.html
			 */
			label: Type.Optional(
				Type.Union([Type.Ref("label"), Type.Array(Type.Ref("label"))]),
			),
			/**
			 * Keyword or phrase which describes a resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/term.html
			 */
			term: Type.Optional(
				Type.Union([Type.Ref("term"), Type.Array(Type.Ref("term"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
