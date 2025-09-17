import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Reflects the number of apparent sound channels in the playback of a recording (monaural, stereophonic, quadraphonic, etc.).
 * @see https://music-encoding.org/guidelines/v5/elements/soundChan.html
 */
export const SoundChanSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrLangSchema,
	Type.Object(
		{
			/**
			 * Records the channel configuration in numeric form.
			 * @see https://music-encoding.org/guidelines/v5/elements/soundChan.html#num
			 */
			"@num": Type.Optional(Type.Integer({ minimum: 1 })),
			// Optional head and textPhraseLike.limited children
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),
			/**
			 * A generic element for 1) a shortened form of a word, including an acronym or 2) a shorthand notation.
			 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
			 */
			abbr: Type.Optional(
				Type.Union([Type.Ref("abbr"), Type.Array(Type.Ref("abbr"))]),
			),
			/**
			 * Provides a statement explaining the text or indicating the basis for an assertion.
			 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
			 */
			annot: Type.Optional(
				Type.Union([Type.Ref("annot"), Type.Array(Type.Ref("annot"))]),
			),
			/**
			 * Provides a loosely-structured bibliographic citation in which the sub-components may or may not be explicitly marked.
			 * @see https://music-encoding.org/guidelines/v5/elements/bibl.html
			 */
			bibl: Type.Optional(
				Type.Union([Type.Ref("bibl"), Type.Array(Type.Ref("bibl"))]),
			),
			biblStruct: Type.Optional(
				/**
				 * Contains a bibliographic citation in which bibliographic sub-elements must appear in a specified order.
				 * @see https://music-encoding.org/guidelines/v5/elements/biblStruct.html
				 */
				Type.Union([
					Type.Ref("biblStruct"),
					Type.Array(Type.Ref("biblStruct")),
				]),
			),
			/**
			 * A string identifying a point in time or the time period between two such points.
			 * @see https://music-encoding.org/guidelines/v5/elements/date.html
			 */
			date: Type.Optional(
				Type.Union([Type.Ref("date"), Type.Array(Type.Ref("date"))]),
			),
			dedicatee: Type.Optional(
				/**
				 * Entity to whom a creative work is formally offered.
				 * @see https://music-encoding.org/guidelines/v5/elements/dedicatee.html
				 */
				Type.Union([Type.Ref("dedicatee"), Type.Array(Type.Ref("dedicatee"))]),
			),
			/**
			 * Description of a measurement taken through a three-dimensional object.
			 * @see https://music-encoding.org/guidelines/v5/elements/depth.html
			 */
			depth: Type.Optional(
				Type.Union([Type.Ref("depth"), Type.Array(Type.Ref("depth"))]),
			),
			/**
			 * Any single dimensional specification.
			 * @see https://music-encoding.org/guidelines/v5/elements/dim.html
			 */
			dim: Type.Optional(
				Type.Union([Type.Ref("dim"), Type.Array(Type.Ref("dim"))]),
			),
			dimensions: Type.Optional(
				/**
				 * Information about the physical size of an entity; usually includes numerical data.
				 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
				 */
				Type.Union([
					Type.Ref("dimensions"),
					Type.Array(Type.Ref("dimensions")),
				]),
			),
			extent: Type.Optional(
				/**
				 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
				 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
				 */
				Type.Union([Type.Ref("extent"), Type.Array(Type.Ref("extent"))]),
			),
			height: Type.Optional(
				/**
				 * Description of the vertical size of an object.
				 * @see https://music-encoding.org/guidelines/v5/elements/height.html
				 */
				Type.Union([Type.Ref("height"), Type.Array(Type.Ref("height"))]),
			),
			identifier: Type.Optional(
				/**
				 * An alpha-numeric string that establishes the identity of the described material.
				 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
				 */
				Type.Union([
					Type.Ref("identifier"),
					Type.Array(Type.Ref("identifier")),
				]),
			),
			/**
			 * An empty formatting element that forces text to begin on a new line.
			 * @see https://music-encoding.org/guidelines/v5/elements/lb.html
			 */
			lb: Type.Optional(
				Type.Union([Type.Ref("lb"), Type.Array(Type.Ref("lb"))]),
			),
			list: Type.Optional(
				Type.Union([Type.Ref("list"), Type.Array(Type.Ref("list"))]),
			),
			/**
			 * Proper noun or noun phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/name.html
			 */
			name: Type.Optional(
				Type.Union([Type.Ref("name"), Type.Array(Type.Ref("name"))]),
			),
			num: Type.Optional(
				Type.Union([Type.Ref("num"), Type.Array(Type.Ref("num"))]),
			),
			/**
			 * Contains a quotation, anonymous or attributed, appearing on a title page.
			 * @see https://music-encoding.org/guidelines/v5/elements/quote.html
			 */
			quote: Type.Optional(
				Type.Union([Type.Ref("quote"), Type.Array(Type.Ref("quote"))]),
			),
			/**
			 * Describes a relationship or linkage amongst entities.
			 * @see https://music-encoding.org/guidelines/v5/elements/relation.html
			 */
			relation: Type.Optional(
				Type.Union([Type.Ref("relation"), Type.Array(Type.Ref("relation"))]),
			),
			relationList: Type.Optional(
				/**
				 * Gathers relation elements.
				 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
				 */
				Type.Union([
					Type.Ref("relationList"),
					Type.Array(Type.Ref("relationList")),
				]),
			),
			/**
			 * A formatting element indicating special visual rendering, e.g., bold or italicized, of a text word or phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
			 */
			rend: Type.Optional(
				Type.Union([Type.Ref("rend"), Type.Array(Type.Ref("rend"))]),
			),
			repository: Type.Optional(
				/**
				 * Institution, agency, or individual which holds a bibliographic item.
				 * @see https://music-encoding.org/guidelines/v5/elements/repository.html
				 */
				Type.Union([
					Type.Ref("repository"),
					Type.Array(Type.Ref("repository")),
				]),
			),
			/**
			 * An inline table with a single column.
			 * @see https://music-encoding.org/guidelines/v5/elements/stack.html
			 */
			stack: Type.Optional(
				Type.Union([Type.Ref("stack"), Type.Array(Type.Ref("stack"))]),
			),
			symbol: Type.Optional(
				/**
				 * A reference to a previously defined symbol.
				 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
				 */
				Type.Union([Type.Ref("symbol"), Type.Array(Type.Ref("symbol"))]),
			),
			/**
			 * Keyword or phrase which describes a resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/term.html
			 */
			term: Type.Optional(
				Type.Union([Type.Ref("term"), Type.Array(Type.Ref("term"))]),
			),
			/**
			 * Title of a bibliographic entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/title.html
			 */
			title: Type.Optional(
				Type.Union([Type.Ref("title"), Type.Array(Type.Ref("title"))]),
			),
			/**
			 * Description of the horizontal size of an object.
			 * @see https://music-encoding.org/guidelines/v5/elements/width.html
			 */
			width: Type.Optional(
				Type.Union([Type.Ref("width"), Type.Array(Type.Ref("width"))]),
			),
			// MEI.text elements
			/**
			 * Contains material which is distinguished from the surrounding phrase-level text using quotation marks or a similar method. Use quote for block-level quotations.
			 * @see https://music-encoding.org/guidelines/v5/elements/q.html
			 */
			q: Type.Optional(Type.Union([Type.Ref("q"), Type.Array(Type.Ref("q"))])),
			/**
			 * Represents any segmentation of text below the "text component" level.
			 * @see https://music-encoding.org/guidelines/v5/elements/seg.html
			 */
			seg: Type.Optional(
				Type.Union([Type.Ref("seg"), Type.Array(Type.Ref("seg"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
