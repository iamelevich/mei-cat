import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { ExpanSchema } from "../edittrans/expan";
import { FigSchema } from "../figtable/fig";
import { CatchwordsSchema } from "../namesdates/catchwords";
import { CorpNameSchema } from "../namesdates/corpName";
import { GeogNameSchema } from "../namesdates/geogName";
import { HeraldrySchema } from "../namesdates/heraldry";
import { LocusSchema } from "../namesdates/locus";
import { LocusGrpSchema } from "../namesdates/locusGrp";
import { PersNameSchema } from "../namesdates/persName";
import { SecFolioSchema } from "../namesdates/secFolio";
import { SignaturesSchema } from "../namesdates/signatures";
import { StampSchema } from "../namesdates/stamp";
import { PtrSchema } from "../ptrref/ptr";
import { RefSchema } from "../ptrref/ref";
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
 * The equalization system, noise reduction system, etc. used in making the recording (e.g., NAB, DBX, Dolby, etc.).
 * @see https://music-encoding.org/guidelines/v5/elements/specRepro.html
 */
export const SpecReproSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrLangSchema,
	Type.Object(
		{
			// MEI.shared elements
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
			/**
			 * One or more text phrases that form a logical prose passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([PSchema, Type.Array(PSchema)])),
			/**
			 * An abbreviated form of a name.
			 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
			 */
			abbr: Type.Optional(Type.Union([AbbrSchema, Type.Array(AbbrSchema)])),
			/**
			 * An annotation or note, e.g., an editorial note.
			 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
			 */
			annot: Type.Optional(Type.Union([AnnotSchema, Type.Array(AnnotSchema)])),
			/**
			 * A bibliographic description of a source used in the creation of the electronic file.
			 * @see https://music-encoding.org/guidelines/v5/elements/bibl.html
			 */
			bibl: Type.Optional(Type.Union([BiblSchema, Type.Array(BiblSchema)])),
			/**
			 * A bibliographic description of a source used in the creation of the electronic file.
			 * @see https://music-encoding.org/guidelines/v5/elements/biblStruct.html
			 */
			biblStruct: Type.Optional(
				Type.Union([BiblStructSchema, Type.Array(BiblStructSchema)]),
			),
			/**
			 * A calendar date, possibly with a qualifier.
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
			 * Description of the depth of an object.
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
			 * A list of items.
			 * @see https://music-encoding.org/guidelines/v5/elements/list.html
			 */
			list: Type.Optional(Type.Union([ListSchema, Type.Array(ListSchema)])),
			/**
			 * Proper noun or noun phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/name.html
			 */
			name: Type.Optional(Type.Union([NameSchema, Type.Array(NameSchema)])),
			/**
			 * A numeric value.
			 * @see https://music-encoding.org/guidelines/v5/elements/num.html
			 */
			num: Type.Optional(Type.Union([NumSchema, Type.Array(NumSchema)])),
			/**
			 * A quoted passage.
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
			// MEI.edittrans elements
			/**
			 * A text expansion.
			 * @see https://music-encoding.org/guidelines/v5/elements/expan.html
			 */
			expan: Type.Optional(Type.Union([ExpanSchema, Type.Array(ExpanSchema)])),
			// MEI.figtable elements
			/**
			 * A figure or table.
			 * @see https://music-encoding.org/guidelines/v5/elements/fig.html
			 */
			fig: Type.Optional(Type.Union([FigSchema, Type.Array(FigSchema)])),
			// MEI.header elements
			// MEI.msDesc elements
			/**
			 * A list of catchwords.
			 * @see https://music-encoding.org/guidelines/v5/elements/catchwords.html
			 */
			catchwords: Type.Optional(
				Type.Union([CatchwordsSchema, Type.Array(CatchwordsSchema)]),
			),
			/**
			 * A heraldry description.
			 * @see https://music-encoding.org/guidelines/v5/elements/heraldry.html
			 */
			heraldry: Type.Optional(
				Type.Union([HeraldrySchema, Type.Array(HeraldrySchema)]),
			),
			/**
			 * A reference to a previously defined locus.
			 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
			 */
			locus: Type.Optional(Type.Union([LocusSchema, Type.Array(LocusSchema)])),
			/**
			 * A group of loci.
			 * @see https://music-encoding.org/guidelines/v5/elements/locusGrp.html
			 */
			locusGrp: Type.Optional(
				Type.Union([LocusGrpSchema, Type.Array(LocusGrpSchema)]),
			),
			/**
			 * A section of a manuscript.
			 * @see https://music-encoding.org/guidelines/v5/elements/secFolio.html
			 */
			secFolio: Type.Optional(
				Type.Union([SecFolioSchema, Type.Array(SecFolioSchema)]),
			),
			/**
			 * A list of signatures.
			 * @see https://music-encoding.org/guidelines/v5/elements/signatures.html
			 */
			signatures: Type.Optional(
				Type.Union([SignaturesSchema, Type.Array(SignaturesSchema)]),
			),
			/**
			 * A stamp or seal.
			 * @see https://music-encoding.org/guidelines/v5/elements/stamp.html
			 */
			stamp: Type.Optional(Type.Union([StampSchema, Type.Array(StampSchema)])),
			// MEI.namesdates elements
			/**
			 * A corporate name.
			 * @see https://music-encoding.org/guidelines/v5/elements/corpName.html
			 */
			corpName: Type.Optional(
				Type.Union([CorpNameSchema, Type.Array(CorpNameSchema)]),
			),
			/**
			 * A geographic name.
			 * @see https://music-encoding.org/guidelines/v5/elements/geogName.html
			 */
			geogName: Type.Optional(
				Type.Union([GeogNameSchema, Type.Array(GeogNameSchema)]),
			),
			/**
			 * A personal name.
			 * @see https://music-encoding.org/guidelines/v5/elements/persName.html
			 */
			persName: Type.Optional(
				Type.Union([PersNameSchema, Type.Array(PersNameSchema)]),
			),
			// MEI.ptrref elements
			/**
			 * A pointer to a previously defined element.
			 * @see https://music-encoding.org/guidelines/v5/elements/ptr.html
			 */
			ptr: Type.Optional(Type.Union([PtrSchema, Type.Array(PtrSchema)])),
			/**
			 * A reference to a previously defined element.
			 * @see https://music-encoding.org/guidelines/v5/elements/ref.html
			 */
			ref: Type.Optional(Type.Union([RefSchema, Type.Array(RefSchema)])),
			// MEI.text elements
			/**
			 * A quoted passage.
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

export type SpecRepro = Static<typeof SpecReproSchema>;
