import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrTextRenditionSchema } from "../shared/attr/textRendition";

/**
 * A label which accompanies an illustration or a table.
 * @see https://music-encoding.org/guidelines/v5/elements/caption.html
 */
export const CaptionSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrTextRenditionSchema,
	Type.Object(
		{
			// Content can be text, paragraphs, or rendering elements
			// Note: #text is already included in StandardTagSchema

			/**
			 * Paragraph.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([Type.Ref("p"), Type.Array(Type.Ref("p"))])),

			/**
			 * Rendering.
			 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
			 */
			rend: Type.Optional(Type.Union([Type.Ref("rend"), Type.Array(Type.Ref("rend"))])),
		},
		{ additionalProperties: false },
	),
]);
