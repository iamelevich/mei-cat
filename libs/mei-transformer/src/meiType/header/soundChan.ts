import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AbbrSchema } from "../shared/abbr";
import { AnnotSchema } from "../shared/annot";
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";
import { BiblSchema } from "../shared/bibl";
import { BiblStructSchema } from "../shared/biblStruct";
import { DateSchema } from "../shared/date";
import { DedicateeSchema } from "../shared/dedicatee";
import { DepthSchema } from "../shared/depth";
import { DimSchema } from "../shared/dim";
import { DimensionsSchema } from "../shared/dimensions";
import { ExtentSchema } from "../shared/extent";
import { HeadSchema } from "../shared/head";
import { HeightSchema } from "../shared/height";
import { IdentifierSchema } from "../shared/identifier";
import { LbSchema } from "../shared/lb";
import { ListSchema } from "../shared/list";
import { NameSchema } from "../shared/name";
import { NumSchema } from "../shared/num";
import { QuoteSchema } from "../shared/quote";
import { RelationSchema } from "../shared/relation";
import { RelationListSchema } from "../shared/relationList";
import { RendSchema } from "../shared/rend";
import { RepositorySchema } from "../shared/repository";
import { StackSchema } from "../shared/stack";
import { SymbolSchema } from "../shared/symbol";
import { TermSchema } from "../shared/term";
import { TitleSchema } from "../shared/title";
import { WidthSchema } from "../shared/width";
import { QSchema } from "../text/q";
import { SegSchema } from "../text/seg";

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
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
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
			 * Provides a loosely-structured bibliographic citation in which the sub-components may or may not be explicitly marked.
			 * @see https://music-encoding.org/guidelines/v5/elements/bibl.html
			 */
			bibl: Type.Optional(Type.Union([BiblSchema, Type.Array(BiblSchema)])),
			biblStruct: Type.Optional(
				/**
				 * Contains a bibliographic citation in which bibliographic sub-elements must appear in a specified order.
				 * @see https://music-encoding.org/guidelines/v5/elements/biblStruct.html
				 */
				Type.Union([BiblStructSchema, Type.Array(BiblStructSchema)]),
			),
			/**
			 * A string identifying a point in time or the time period between two such points.
			 * @see https://music-encoding.org/guidelines/v5/elements/date.html
			 */
			date: Type.Optional(Type.Union([DateSchema, Type.Array(DateSchema)])),
			dedicatee: Type.Optional(
				/**
				 * Entity to whom a creative work is formally offered.
				 * @see https://music-encoding.org/guidelines/v5/elements/dedicatee.html
				 */
				Type.Union([DedicateeSchema, Type.Array(DedicateeSchema)]),
			),
			/**
			 * Description of a measurement taken through a three-dimensional object.
			 * @see https://music-encoding.org/guidelines/v5/elements/depth.html
			 */
			depth: Type.Optional(Type.Union([DepthSchema, Type.Array(DepthSchema)])),
			/**
			 * Any single dimensional specification.
			 * @see https://music-encoding.org/guidelines/v5/elements/dim.html
			 */
			dim: Type.Optional(Type.Union([DimSchema, Type.Array(DimSchema)])),
			dimensions: Type.Optional(
				/**
				 * Information about the physical size of an entity; usually includes numerical data.
				 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
				 */
				Type.Union([DimensionsSchema, Type.Array(DimensionsSchema)]),
			),
			extent: Type.Optional(
				/**
				 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
				 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
				 */
				Type.Union([ExtentSchema, Type.Array(ExtentSchema)]),
			),
			height: Type.Optional(
				/**
				 * Description of the vertical size of an object.
				 * @see https://music-encoding.org/guidelines/v5/elements/height.html
				 */
				Type.Union([HeightSchema, Type.Array(HeightSchema)]),
			),
			identifier: Type.Optional(
				/**
				 * An alpha-numeric string that establishes the identity of the described material.
				 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
				 */
				Type.Union([IdentifierSchema, Type.Array(IdentifierSchema)]),
			),
			/**
			 * An empty formatting element that forces text to begin on a new line.
			 * @see https://music-encoding.org/guidelines/v5/elements/lb.html
			 */
			lb: Type.Optional(Type.Union([LbSchema, Type.Array(LbSchema)])),
			list: Type.Optional(Type.Union([ListSchema, Type.Array(ListSchema)])),
			/**
			 * Proper noun or noun phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/name.html
			 */
			name: Type.Optional(Type.Union([NameSchema, Type.Array(NameSchema)])),
			num: Type.Optional(Type.Union([NumSchema, Type.Array(NumSchema)])),
			/**
			 * Contains a quotation, anonymous or attributed, appearing on a title page.
			 * @see https://music-encoding.org/guidelines/v5/elements/quote.html
			 */
			quote: Type.Optional(Type.Union([QuoteSchema, Type.Array(QuoteSchema)])),
			/**
			 * Describes a relationship or linkage amongst entities.
			 * @see https://music-encoding.org/guidelines/v5/elements/relation.html
			 */
			relation: Type.Optional(
				Type.Union([RelationSchema, Type.Array(RelationSchema)]),
			),
			relationList: Type.Optional(
				/**
				 * Gathers relation elements.
				 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
				 */
				Type.Union([RelationListSchema, Type.Array(RelationListSchema)]),
			),
			/**
			 * A formatting element indicating special visual rendering, e.g., bold or italicized, of a text word or phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
			 */
			rend: Type.Optional(Type.Union([RendSchema, Type.Array(RendSchema)])),
			repository: Type.Optional(
				/**
				 * Institution, agency, or individual which holds a bibliographic item.
				 * @see https://music-encoding.org/guidelines/v5/elements/repository.html
				 */
				Type.Union([RepositorySchema, Type.Array(RepositorySchema)]),
			),
			/**
			 * An inline table with a single column.
			 * @see https://music-encoding.org/guidelines/v5/elements/stack.html
			 */
			stack: Type.Optional(Type.Union([StackSchema, Type.Array(StackSchema)])),
			symbol: Type.Optional(
				/**
				 * A reference to a previously defined symbol.
				 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
				 */
				Type.Union([SymbolSchema, Type.Array(SymbolSchema)]),
			),
			/**
			 * Keyword or phrase which describes a resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/term.html
			 */
			term: Type.Optional(Type.Union([TermSchema, Type.Array(TermSchema)])),
			/**
			 * Title of a bibliographic entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/title.html
			 */
			title: Type.Optional(Type.Union([TitleSchema, Type.Array(TitleSchema)])),
			/**
			 * Description of the horizontal size of an object.
			 * @see https://music-encoding.org/guidelines/v5/elements/width.html
			 */
			width: Type.Optional(Type.Union([WidthSchema, Type.Array(WidthSchema)])),
			// MEI.text elements
			/**
			 * Contains material which is distinguished from the surrounding phrase-level text using quotation marks or a similar method. Use quote for block-level quotations.
			 * @see https://music-encoding.org/guidelines/v5/elements/q.html
			 */
			q: Type.Optional(Type.Union([QSchema, Type.Array(QSchema)])),
			/**
			 * Represents any segmentation of text below the "text component" level.
			 * @see https://music-encoding.org/guidelines/v5/elements/seg.html
			 */
			seg: Type.Optional(Type.Union([SegSchema, Type.Array(SegSchema)])),
		},
		{ additionalProperties: false },
	),
]);

export type SoundChan = Static<typeof SoundChanSchema>;
