import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { ExpanSchema } from "../edittrans/expan";
import { FigSchema } from "../figtable/fig";
import { BlocSchema } from "../namesdates/bloc";
import { CatchwordsSchema } from "../namesdates/catchwords";
import { CorpNameSchema } from "../namesdates/corpName";
import { CountrySchema } from "../namesdates/country";
import { DistrictSchema } from "../namesdates/district";
import { GeogFeatSchema } from "../namesdates/geogFeat";
import { GeogNameSchema } from "../namesdates/geogName";
import { HeraldrySchema } from "../namesdates/heraldry";
import { LocusSchema } from "../namesdates/locus";
import { LocusGrpSchema } from "../namesdates/locusGrp";
import { PeriodNameSchema } from "../namesdates/periodName";
import { PersNameSchema } from "../namesdates/persName";
import { PostBoxSchema } from "../namesdates/postBox";
import { PostCodeSchema } from "../namesdates/postCode";
import { RegionSchema } from "../namesdates/region";
import { SecFolioSchema } from "../namesdates/secFolio";
import { SettlementSchema } from "../namesdates/settlement";
import { SignaturesSchema } from "../namesdates/signatures";
import { StampSchema } from "../namesdates/stamp";
import { StreetSchema } from "../namesdates/street";
import { StyleNameSchema } from "../namesdates/styleName";
import { WatermarkSchema } from "../namesdates/watermark";
import { PtrSchema } from "../ptrref/ptr";
import { RefSchema } from "../ptrref/ref";
import { AbbrSchema } from "../shared/abbr";
import { AddressSchema } from "../shared/address";
import { AnnotSchema } from "../shared/annot";
import { ArrangerSchema } from "../shared/arranger";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrLangSchema } from "../shared/attr/lang";
import { AuthorSchema } from "../shared/author";
import { BiblSchema } from "../shared/bibl";
import { BiblStructSchema } from "../shared/biblStruct";
import { ComposerSchema } from "../shared/composer";
import { ContributorSchema } from "../shared/contributor";
import { DateSchema } from "../shared/date";
import { DedicateeSchema } from "../shared/dedicatee";
import { DepthSchema } from "../shared/depth";
import { DimSchema } from "../shared/dim";
import { DimensionsSchema } from "../shared/dimensions";
import { EditorSchema } from "../shared/editor";
import { ExtentSchema } from "../shared/extent";
import { FunderSchema } from "../shared/funder";
import { HeightSchema } from "../shared/height";
import { IdentifierSchema } from "../shared/identifier";
import { LbSchema } from "../shared/lb";
import { LibrettistSchema } from "../shared/librettist";
import { LyricistSchema } from "../shared/lyricist";
import { NameSchema } from "../shared/name";
import { NumSchema } from "../shared/num";
import { RelationSchema } from "../shared/relation";
import { RelationListSchema } from "../shared/relationList";
import { RendSchema } from "../shared/rend";
import { RepositorySchema } from "../shared/repository";
import { SponsorSchema } from "../shared/sponsor";
import { StackSchema } from "../shared/stack";
import { SymbolSchema } from "../shared/symbol";
import { TermSchema } from "../shared/term";
import { TitleSchema } from "../shared/title";
import { WidthSchema } from "../shared/width";
import { QSchema } from "../text/q";
import { SegSchema } from "../text/seg";

/**
 * Contains the primary statement of responsibility given for a work on the title page of a manifestation.
 * @see https://music-encoding.org/guidelines/v5/elements/byline.html
 */
export const BylineSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrFacsimileSchema,
	AttrLangSchema,
	Type.Object(
		{
			// --- MEI.edittrans Editorial and transcriptional component declarations ---
			/**
			 * A generic element for 1) a shortened form of a word, including an acronym or 2) a shorthand notation.
			 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
			 */
			abbr: Type.Optional(Type.Union([AbbrSchema, Type.Array(AbbrSchema)])),
			/**
			 * Contains the expansion of an abbreviation.
			 * @see https://music-encoding.org/guidelines/v5/elements/expan.html
			 */
			expan: Type.Optional(Type.Union([ExpanSchema, Type.Array(ExpanSchema)])),

			// --- MEI.figtable Figures and tables component declarations ---
			/**
			 * Groups elements representing or containing graphic information such as an illustration or figure.
			 * @see https://music-encoding.org/guidelines/v5/elements/fig.html
			 */
			fig: Type.Optional(Type.Union([FigSchema, Type.Array(FigSchema)])),

			// --- MEI.header Metadata header component declarations ---
			/**
			 * Contains a description of a watermark or similar device.
			 * @see https://music-encoding.org/guidelines/v5/elements/watermark.html
			 */
			watermark: Type.Optional(
				Type.Union([WatermarkSchema, Type.Array(WatermarkSchema)]),
			),

			// --- MEI.msDesc Manuscript description component declarations ---
			/**
			 * Describes the system used to ensure correct ordering of the quires making up an item, typically by means of annotations at the foot of the page.
			 * @see https://music-encoding.org/guidelines/v5/elements/catchwords.html
			 */
			catchwords: Type.Optional(
				Type.Union([CatchwordsSchema, Type.Array(CatchwordsSchema)]),
			),
			/**
			 * Contains a heraldic formula or phrase, typically found as part of a blazon, coat of arms, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/heraldry.html
			 */
			heraldry: Type.Optional(
				Type.Union([HeraldrySchema, Type.Array(HeraldrySchema)]),
			),
			/**
			 * Defines a location within a manuscript or manuscript component, usually as a (possibly discontinuous) sequence of folio references.
			 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
			 */
			locus: Type.Optional(Type.Union([LocusSchema, Type.Array(LocusSchema)])),
			/**
			 * Groups locations which together form a distinct but discontinuous item within a manuscript or manuscript part, according to a specific foliation.
			 * @see https://music-encoding.org/guidelines/v5/elements/locusGrp.html
			 */
			locusGrp: Type.Optional(
				Type.Union([LocusGrpSchema, Type.Array(LocusGrpSchema)]),
			),
			/**
			 * Marks the word or words taken from a fixed point in a codex (typically the beginning of the second leaf) in order to provide a unique identifier for the item.
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
			 * Contains a word or phrase describing an official mark indicating ownership, genuineness, validity, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/stamp.html
			 */
			stamp: Type.Optional(Type.Union([StampSchema, Type.Array(StampSchema)])),

			// --- MEI.namesdates Names and dates component declarations ---
			/**
			 * Contains the name of a geopolitical unit consisting of two or more nation states or countries.
			 * @see https://music-encoding.org/guidelines/v5/elements/bloc.html
			 */
			bloc: Type.Optional(Type.Union([BlocSchema, Type.Array(BlocSchema)])),
			/**
			 * Identifies an organization or group of people that acts as a single entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/corpName.html
			 */
			corpName: Type.Optional(
				Type.Union([CorpNameSchema, Type.Array(CorpNameSchema)]),
			),
			/**
			 * Contains the name of a geopolitical unit, such as a nation, country, colony, or commonwealth, larger than or administratively superior to a region and smaller than a bloc.
			 * @see https://music-encoding.org/guidelines/v5/elements/country.html
			 */
			country: Type.Optional(
				Type.Union([CountrySchema, Type.Array(CountrySchema)]),
			),
			/**
			 * Contains the name of any kind of subdivision of a settlement, such as a parish, ward, or other administrative or geographic unit.
			 * @see https://music-encoding.org/guidelines/v5/elements/district.html
			 */
			district: Type.Optional(
				Type.Union([DistrictSchema, Type.Array(DistrictSchema)]),
			),
			/**
			 * Contains a common noun identifying a geographical feature.
			 * @see https://music-encoding.org/guidelines/v5/elements/geogFeat.html
			 */
			geogFeat: Type.Optional(
				Type.Union([GeogFeatSchema, Type.Array(GeogFeatSchema)]),
			),
			/**
			 * The proper noun designation for a place, natural feature, or political jurisdiction.
			 * @see https://music-encoding.org/guidelines/v5/elements/geogName.html
			 */
			geogName: Type.Optional(
				Type.Union([GeogNameSchema, Type.Array(GeogNameSchema)]),
			),
			/**
			 * A label that describes a period of time, such as 'Baroque' or '3rd Style period'.
			 * @see https://music-encoding.org/guidelines/v5/elements/periodName.html
			 */
			periodName: Type.Optional(
				Type.Union([PeriodNameSchema, Type.Array(PeriodNameSchema)]),
			),
			/**
			 * Designation for an individual, including any or all of that individual's forenames, surnames, honorific titles, and added names.
			 * @see https://music-encoding.org/guidelines/v5/elements/persName.html
			 */
			persName: Type.Optional(
				Type.Union([PersNameSchema, Type.Array(PersNameSchema)]),
			),
			/**
			 * Contains a number or other identifier for some postal delivery point other than a street address.
			 * @see https://music-encoding.org/guidelines/v5/elements/postBox.html
			 */
			postBox: Type.Optional(
				Type.Union([PostBoxSchema, Type.Array(PostBoxSchema)]),
			),
			/**
			 * Contains a numerical or alphanumeric code used as part of a postal address to simplify sorting or delivery of mail.
			 * @see https://music-encoding.org/guidelines/v5/elements/postCode.html
			 */
			postCode: Type.Optional(
				Type.Union([PostCodeSchema, Type.Array(PostCodeSchema)]),
			),
			/**
			 * Contains the name of an administrative unit such as a state, province, or county, larger than a settlement, but smaller than a country.
			 * @see https://music-encoding.org/guidelines/v5/elements/region.html
			 */
			region: Type.Optional(
				Type.Union([RegionSchema, Type.Array(RegionSchema)]),
			),
			/**
			 * Contains the name of a settlement such as a city, town, or village identified as a single geopolitical or administrative unit.
			 * @see https://music-encoding.org/guidelines/v5/elements/settlement.html
			 */
			settlement: Type.Optional(
				Type.Union([SettlementSchema, Type.Array(SettlementSchema)]),
			),
			/**
			 * Full street address including any name or number identifying a building as well as the name of the street or route on which it is located.
			 * @see https://music-encoding.org/guidelines/v5/elements/street.html
			 */
			street: Type.Optional(
				Type.Union([StreetSchema, Type.Array(StreetSchema)]),
			),
			/**
			 * A label for a characteristic style of writing or performance, such as 'bebop' or 'rock-n-roll'.
			 * @see https://music-encoding.org/guidelines/v5/elements/styleName.html
			 */
			styleName: Type.Optional(
				Type.Union([StyleNameSchema, Type.Array(StyleNameSchema)]),
			),

			// --- MEI.ptrref Pointer and reference component declarations ---
			/**
			 * Defines a traversible pointer to another location, using only attributes to describe the destination.
			 * @see https://music-encoding.org/guidelines/v5/elements/ptr.html
			 */
			ptr: Type.Optional(Type.Union([PtrSchema, Type.Array(PtrSchema)])),
			/**
			 * Defines a traversible reference to another location. May contain text and sub-elements that describe the destination.
			 * @see https://music-encoding.org/guidelines/v5/elements/ref.html
			 */
			ref: Type.Optional(Type.Union([RefSchema, Type.Array(RefSchema)])),

			// --- MEI.shared Component declarations that are shared between two or more modules ---
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
			 * A person or organization who transcribes a musical composition, usually for a different medium from that of the original; in an arrangement the musical substance remains essentially unchanged.
			 * @see https://music-encoding.org/guidelines/v5/elements/arranger.html
			 */
			arranger: Type.Optional(
				Type.Union([ArrangerSchema, Type.Array(ArrangerSchema)]),
			),
			/**
			 * The name of the creator of the intellectual content of a non-musical, literary work.
			 * @see https://music-encoding.org/guidelines/v5/elements/author.html
			 */
			author: Type.Optional(
				Type.Union([AuthorSchema, Type.Array(AuthorSchema)]),
			),
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
			 * The name of the creator of the intellectual content of a musical work.
			 * @see https://music-encoding.org/guidelines/v5/elements/composer.html
			 */
			composer: Type.Optional(
				Type.Union([ComposerSchema, Type.Array(ComposerSchema)]),
			),
			/**
			 * Names of individuals, institutions, or organizations responsible for contributions to the intellectual content of a work, where the specialized elements for authors, editors, etc. do not suffice or do not apply.
			 * @see https://music-encoding.org/guidelines/v5/elements/contributor.html
			 */
			contributor: Type.Optional(
				Type.Union([ContributorSchema, Type.Array(ContributorSchema)]),
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
			 * Information about the physical size of an entity; usually includes numerical data.
			 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
			 */
			dimensions: Type.Optional(
				Type.Union([DimensionsSchema, Type.Array(DimensionsSchema)]),
			),
			/**
			 * The name of the individual(s), institution(s) or organization(s) acting in an editorial capacity.
			 * @see https://music-encoding.org/guidelines/v5/elements/editor.html
			 */
			editor: Type.Optional(
				Type.Union([EditorSchema, Type.Array(EditorSchema)]),
			),
			/**
			 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
			 */
			extent: Type.Optional(
				Type.Union([ExtentSchema, Type.Array(ExtentSchema)]),
			),
			/**
			 * Names of individuals, institutions, or organizations responsible for funding. Funders provide financial support for a project; they are distinct from sponsors, who provide intellectual support and authority.
			 * @see https://music-encoding.org/guidelines/v5/elements/funder.html
			 */
			funder: Type.Optional(
				Type.Union([FunderSchema, Type.Array(FunderSchema)]),
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
			 * Person or organization who is a writer of the text of an opera, oratorio, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/librettist.html
			 */
			librettist: Type.Optional(
				Type.Union([LibrettistSchema, Type.Array(LibrettistSchema)]),
			),
			/**
			 * Person or organization who is a writer of the text of a song.
			 * @see https://music-encoding.org/guidelines/v5/elements/lyricist.html
			 */
			lyricist: Type.Optional(
				Type.Union([LyricistSchema, Type.Array(LyricistSchema)]),
			),
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
			 * Names of sponsoring individuals, organizations or institutions. Sponsors give their intellectual authority to a project; they are to be distinguished from funders, who provide the funding but do not necessarily take intellectual responsibility.
			 * @see https://music-encoding.org/guidelines/v5/elements/sponsor.html
			 */
			sponsor: Type.Optional(
				Type.Union([SponsorSchema, Type.Array(SponsorSchema)]),
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

			// --- MEI.text Text component declarations ---
			/**
			 * Contains material which is distinguished from the surrounding phrase-level text using quotation marks or a similar method.
			 * Use quote for block-level quotations.
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

export type Byline = Static<typeof BylineSchema>;
