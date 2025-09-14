import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AbbrSchema } from "../shared/abbr";
import { AnnotSchema } from "../shared/annot";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrTextRenditionSchema } from "../shared/attr/textRendition";
import { LbSchema } from "../shared/lb";
import { NameSchema } from "../shared/name";
import { NumSchema } from "../shared/num";
import { PbSchema } from "../shared/pb";
import { RendSchema } from "../shared/rend";
import { TermSchema } from "../shared/term";

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
			abbr: Type.Optional(Type.Union([AbbrSchema, Type.Array(AbbrSchema)])),

			/**
			 * Provides a statement explaining the text or indicating the basis for an assertion.
			 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
			 */
			annot: Type.Optional(Type.Union([AnnotSchema, Type.Array(AnnotSchema)])),

			/**
			 * An empty formatting element that forces text to begin on a new line.
			 * @see https://music-encoding.org/guidelines/v5/elements/lb.html
			 */
			lb: Type.Optional(Type.Union([LbSchema, Type.Array(LbSchema)])),

			/**
			 * Proper noun or noun phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/name.html
			 */
			name: Type.Optional(Type.Union([NameSchema, Type.Array(NameSchema)])),

			/**
			 * Numeric information in any form.
			 * @see https://music-encoding.org/guidelines/v5/elements/num.html
			 */
			num: Type.Optional(Type.Union([NumSchema, Type.Array(NumSchema)])),

			/**
			 * An empty formatting element that forces text to begin on a new page.
			 * @see https://music-encoding.org/guidelines/v5/elements/pb.html
			 */
			pb: Type.Optional(Type.Union([PbSchema, Type.Array(PbSchema)])),

			/**
			 * A formatting element indicating special visual rendering, e.g., bold or italicized, of a text word or phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
			 */
			rend: Type.Optional(Type.Union([RendSchema, Type.Array(RendSchema)])),

			/**
			 * Keyword or phrase which describes a resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/term.html
			 */
			term: Type.Optional(Type.Union([TermSchema, Type.Array(TermSchema)])),
		},
		{ additionalProperties: false },
	),
]);

export type Q = Static<typeof QSchema>;
