import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { ExpanSchema } from "../edittrans/expan";
import { FigSchema } from "../figtable/fig";
import { SecFolioSchema } from "../msDesc/secFolio";
import { CatchwordsSchema } from "../namesdates/catchwords";
import { CorpNameSchema } from "../namesdates/corpName";
import { GeogNameSchema } from "../namesdates/geogName";
import { HeraldrySchema } from "../namesdates/heraldry";
import { LocusSchema } from "../namesdates/locus";
import { LocusGrpSchema } from "../namesdates/locusGrp";
import { PersNameSchema } from "../namesdates/persName";
import { SignaturesSchema } from "../namesdates/signatures";
import { StampSchema } from "../namesdates/stamp";
import { PtrSchema } from "../ptrref/ptr";
import { RefSchema } from "../ptrref/ref";
import { AbbrSchema } from "../shared/abbr";
import { AddressSchema } from "../shared/address";
import { AnnotSchema } from "../shared/annot";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
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
import { PSchema } from "../shared/p";
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
 * Contains a description of a watermark or similar device.
 * @see https://music-encoding.org/guidelines/v5/elements/watermark.html
 */
export const WatermarkSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrFacsimileSchema,
	AttrLangSchema,
	Type.Object(
		{
			// MEI.shared elements
			/**
			 * A generic element for shortened forms or shorthand notations.
			 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
			 */
			abbr: Type.Optional(Type.Union([AbbrSchema, Type.Array(AbbrSchema)])),
			/**
			 * Contains a postal address, for example of a publisher, an organization, or an individual.
			 * @see https://music-encoding.org/guidelines/v5/elements/address.html
			 */
			address: Type.Optional(
				Type.Union([AddressSchema, Type.Array(AddressSchema)]),
			),
			/**
			 * Provides a statement explaining the text or indicating the basis for an assertion.
			 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
			 */
			annot: Type.Optional(Type.Union([AnnotSchema, Type.Array(AnnotSchema)])),
			/**
			 * Provides a loosely-structured bibliographic citation.
			 * @see https://music-encoding.org/guidelines/v5/elements/bibl.html
			 */
			bibl: Type.Optional(Type.Union([BiblSchema, Type.Array(BiblSchema)])),
			/**
			 * Contains a bibliographic citation with sub-elements in a specified order.
			 * @see https://music-encoding.org/guidelines/v5/elements/biblStruct.html
			 */
			biblStruct: Type.Optional(
				Type.Union([BiblStructSchema, Type.Array(BiblStructSchema)]),
			),
			/**
			 * A string identifying a point in time or a period between two points.
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
			/**
			 * Information about the physical size of an entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
			 */
			dimensions: Type.Optional(
				Type.Union([DimensionsSchema, Type.Array(DimensionsSchema)]),
			),
			/**
			 * Size in terms other than physical dimensions, e.g., pages, records, bytes.
			 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
			 */
			extent: Type.Optional(
				Type.Union([ExtentSchema, Type.Array(ExtentSchema)]),
			),
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
			/**
			 * Description of the vertical size of an object.
			 * @see https://music-encoding.org/guidelines/v5/elements/height.html
			 */
			height: Type.Optional(
				Type.Union([HeightSchema, Type.Array(HeightSchema)]),
			),
			/**
			 * An alphanumeric string that establishes the identity of the described material.
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
			 * One or more text phrases that form a logical prose passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([PSchema, Type.Array(PSchema)])),
			/**
			 * Phrase-level material distinguished using quotation marks or similar.
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
			/**
			 * Gathers relation elements.
			 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
			 */
			relationList: Type.Optional(
				Type.Union([RelationListSchema, Type.Array(RelationListSchema)]),
			),
			/**
			 * Formatting element indicating special visual rendering of text.
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
			 * Reference to a previously defined symbol.
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
			// MEI.edittrans elements
			/**
			 * Contains the expansion of an abbreviation.
			 * @see https://music-encoding.org/guidelines/v5/elements/expan.html
			 */
			expan: Type.Optional(Type.Union([ExpanSchema, Type.Array(ExpanSchema)])),
			// MEI.figtable elements
			/**
			 * Groups elements representing or containing graphic information such as an illustration or figure.
			 * @see https://music-encoding.org/guidelines/v5/elements/fig.html
			 */
			fig: Type.Optional(Type.Union([FigSchema, Type.Array(FigSchema)])),
			// MEI.msDesc elements
			/**
			 * Describes the system used to ensure correct ordering of the quires making up an item.
			 * @see https://music-encoding.org/guidelines/v5/elements/catchwords.html
			 */
			catchwords: Type.Optional(
				Type.Union([CatchwordsSchema, Type.Array(CatchwordsSchema)]),
			),
			/**
			 * Contains a heraldic formula or phrase, typically part of a blazon or coat of arms.
			 * @see https://music-encoding.org/guidelines/v5/elements/heraldry.html
			 */
			heraldry: Type.Optional(
				Type.Union([HeraldrySchema, Type.Array(HeraldrySchema)]),
			),
			/**
			 * Defines a location within a manuscript or manuscript component.
			 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
			 */
			locus: Type.Optional(Type.Union([LocusSchema, Type.Array(LocusSchema)])),
			/**
			 * Groups locations that together form a distinct but discontinuous item.
			 * @see https://music-encoding.org/guidelines/v5/elements/locusGrp.html
			 */
			locusGrp: Type.Optional(
				Type.Union([LocusGrpSchema, Type.Array(LocusGrpSchema)]),
			),
			/**
			 * Marks words taken from a fixed point in a codex to provide a unique identifier for the item.
			 * @see https://music-encoding.org/guidelines/v5/elements/secFolio.html
			 */
			secFolio: Type.Optional(
				Type.Union([SecFolioSchema, Type.Array(SecFolioSchema)]),
			),
			/**
			 * Provides a description of the leaf or quire signatures found within a codex.
			 * @see https://music-encoding.org/guidelines/v5/elements/signatures.html
			 */
			signatures: Type.Optional(
				Type.Union([SignaturesSchema, Type.Array(SignaturesSchema)]),
			),
			/**
			 * Describes an official mark indicating ownership, genuineness, validity, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/stamp.html
			 */
			stamp: Type.Optional(Type.Union([StampSchema, Type.Array(StampSchema)])),
			// MEI.namesdates elements
			/**
			 * Identifies an organization or group of people that acts as a single entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/corpName.html
			 */
			corpName: Type.Optional(
				Type.Union([CorpNameSchema, Type.Array(CorpNameSchema)]),
			),
			/**
			 * Proper noun designation for a place, natural feature, or political jurisdiction.
			 * @see https://music-encoding.org/guidelines/v5/elements/geogName.html
			 */
			geogName: Type.Optional(
				Type.Union([GeogNameSchema, Type.Array(GeogNameSchema)]),
			),
			/**
			 * Designation for an individual, including forenames, surnames, titles, and added names.
			 * @see https://music-encoding.org/guidelines/v5/elements/persName.html
			 */
			persName: Type.Optional(
				Type.Union([PersNameSchema, Type.Array(PersNameSchema)]),
			),
			// MEI.ptrref elements
			/**
			 * Traversible pointer to another location, described using only attributes.
			 * @see https://music-encoding.org/guidelines/v5/elements/ptr.html
			 */
			ptr: Type.Optional(Type.Union([PtrSchema, Type.Array(PtrSchema)])),
			/**
			 * Traversible reference to another location; may contain text and sub-elements.
			 * @see https://music-encoding.org/guidelines/v5/elements/ref.html
			 */
			ref: Type.Optional(Type.Union([RefSchema, Type.Array(RefSchema)])),
			// MEI.text elements
			/**
			 * Phrase-level material distinguished using quotation marks or similar.
			 * @see https://music-encoding.org/guidelines/v5/elements/q.html
			 */
			q: Type.Optional(Type.Union([QSchema, Type.Array(QSchema)])),
			/**
			 * Represents any segmentation of text below the text component level.
			 * @see https://music-encoding.org/guidelines/v5/elements/seg.html
			 */
			seg: Type.Optional(Type.Union([SegSchema, Type.Array(SegSchema)])),
		},
		{ additionalProperties: false },
	),
]);

export type Watermark = Static<typeof WatermarkSchema>;
