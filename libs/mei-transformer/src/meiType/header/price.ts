import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AbbrSchema } from "../shared/abbr";
import { AnnotSchema } from "../shared/annot";
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
import { NameSchema } from "../shared/name";
import { NumSchema } from "../shared/num";
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
 * The cost of access to a bibliographic item.
 * @see https://music-encoding.org/guidelines/v5/elements/price.html
 */
export const PriceSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrLangSchema,
	Type.Object(
		{
			/**
			 * Numeric value capturing a cost. Can only be interpreted in combination with the currency attribute.
			 * Value conforms to decimal; recommended pattern is two fractional digits.
			 * @see https://music-encoding.org/guidelines/v5/elements/price.html#amount
			 */
			"@amount": Type.Optional(
				Type.String({ pattern: "^[0-9]+(\\.[0-9]{2})?$" }),
			),
			/**
			 * Monetary unit.
			 * Value conforms to data.NMTOKEN.
			 * @see https://music-encoding.org/guidelines/v5/elements/price.html#currency
			 * @see https://music-encoding.org/guidelines/v5/data-types/data.NMTOKEN.html
			 */
			"@currency": Type.Optional(Type.String()),
			// Zero or more model.headLike
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
			// Zero or more choice of text or model.textPhraseLike.limited
			// model.textPhraseLike.limited elements
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
			/**
			 * Contains a bibliographic citation in which bibliographic sub-elements must appear in a specified order.
			 * @see https://music-encoding.org/guidelines/v5/elements/biblStruct.html
			 */
			biblStruct: Type.Optional(
				Type.Union([BiblStructSchema, Type.Array(BiblStructSchema)]),
			),
			/**
			 * A string identifying a point in time or the time period between two such points.
			 * @see https://music-encoding.org/guidelines/v5/elements/date.html
			 */
			date: Type.Optional(Type.Union([DateSchema, Type.Array(DateSchema)])),
			/**
			 * Entity to whom a creative work is formally offered.
			 * @see https://music-encoding.org/guidelines/v5/elements/dedicatee.html
			 */
			dedicatee: Type.Optional(
				Type.Union([DedicateeSchema, Type.Array(DedicateeSchema)]),
			),

			depth: Type.Optional(Type.Union([DepthSchema, Type.Array(DepthSchema)])),
			/**
			 * Any single dimensional specification.
			 * @see https://music-encoding.org/guidelines/v5/elements/dim.html
			 */
			dim: Type.Optional(Type.Union([DimSchema, Type.Array(DimSchema)])),
			/**
			 * Information about the physical size of an entity; usually includes numerical data.
			 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
			 */
			dimensions: Type.Optional(
				Type.Union([DimensionsSchema, Type.Array(DimensionsSchema)]),
			),
			/**
			 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
			 */
			extent: Type.Optional(
				Type.Union([ExtentSchema, Type.Array(ExtentSchema)]),
			),
			/**
			 * Description of the vertical size of an object.
			 * @see https://music-encoding.org/guidelines/v5/elements/height.html
			 */
			height: Type.Optional(
				Type.Union([HeightSchema, Type.Array(HeightSchema)]),
			),
			/**
			 * An alpha-numeric string that establishes the identity of the described material.
			 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
			 */
			identifier: Type.Optional(
				Type.Union([IdentifierSchema, Type.Array(IdentifierSchema)]),
			),
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
			 * Describes a relationship or linkage amongst entities.
			 * @see https://music-encoding.org/guidelines/v5/elements/relation.html
			 */
			relation: Type.Optional(
				Type.Union([RelationSchema, Type.Array(RelationSchema)]),
			),
			/**
			 * Gathers relation elements.
			 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
			 */
			relationList: Type.Optional(
				Type.Union([RelationListSchema, Type.Array(RelationListSchema)]),
			),
			/**
			 * A formatting element indicating special visual rendering, e.g., bold or italicized, of a text word or phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
			 */
			rend: Type.Optional(Type.Union([RendSchema, Type.Array(RendSchema)])),
			/**
			 * Institution, agency, or individual which holds a bibliographic item.
			 * @see https://music-encoding.org/guidelines/v5/elements/repository.html
			 */
			repository: Type.Optional(
				Type.Union([RepositorySchema, Type.Array(RepositorySchema)]),
			),
			/**
			 * An inline table with a single column.
			 * @see https://music-encoding.org/guidelines/v5/elements/stack.html
			 */
			stack: Type.Optional(Type.Union([StackSchema, Type.Array(StackSchema)])),
			/**
			 * A reference to a previously defined symbol.
			 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
			 */
			symbol: Type.Optional(
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

export type Price = Static<typeof PriceSchema>;
