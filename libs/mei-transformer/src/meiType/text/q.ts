import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrTextRenditionSchema } from "../shared/attr/textRendition";

/**
 * Contains material which is distinguished from the surrounding phrase-level text using quotation marks or a similar method. Use quote for block-level quotations.
 * @see https://music-encoding.org/guidelines/v5/elements/q.html
 */
export const QSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrTextRenditionSchema,
	Type.Object(
		{
			// Content model according to MEI spec:
			// rng:zeroOrMore - choice of text OR model.textPhraseLike
			// Text content is handled by Type.String() in the schema

			// model.textPhraseLike elements
			/**
			 * A generic element for 1) a shortened form of a word, including an acronym or 2) a shorthand notation.
			 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
			 */
			abbr: Type.Optional(Type.Union([Type.Ref("abbr"), Type.Array(Type.Ref("abbr"))])),

			/**
			 * Provides a statement explaining the text or indicating the basis for an assertion.
			 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
			 */
			annot: Type.Optional(Type.Union([Type.Ref("annot"), Type.Array(Type.Ref("annot"))])),

			/**
			 * An empty formatting element that forces text to begin on a new line.
			 * @see https://music-encoding.org/guidelines/v5/elements/lb.html
			 */
			lb: Type.Optional(Type.Union([Type.Ref("lb"), Type.Array(Type.Ref("lb"))])),

			/**
			 * Proper noun or noun phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/name.html
			 */
			name: Type.Optional(Type.Union([Type.Ref("name"), Type.Array(Type.Ref("name"))])),

			/**
			 * Numeric information in any form.
			 * @see https://music-encoding.org/guidelines/v5/elements/num.html
			 */
			num: Type.Optional(Type.Union([Type.Ref("num"), Type.Array(Type.Ref("num"))])),

			/**
			 * An empty formatting element that forces text to begin on a new page.
			 * @see https://music-encoding.org/guidelines/v5/elements/pb.html
			 */
			pb: Type.Optional(Type.Union([Type.Ref("pb"), Type.Array(Type.Ref("pb"))])),

			/**
			 * A formatting element indicating special visual rendering, e.g., bold or italicized, of a text word or phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
			 */
			rend: Type.Optional(Type.Union([Type.Ref("rend"), Type.Array(Type.Ref("rend"))])),

			/**
			 * Keyword or phrase which describes a resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/term.html
			 */
			term: Type.Optional(Type.Union([Type.Ref("term"), Type.Array(Type.Ref("term"))])),
		},
		{ additionalProperties: false },
	),
]);
