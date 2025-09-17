import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

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
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),
			/**
			 * One or more text phrases that form a logical prose passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([Type.Ref("p"), Type.Array(Type.Ref("p"))])),
			/**
			 * An abbreviated form of a name.
			 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
			 */
			abbr: Type.Optional(
				Type.Union([Type.Ref("abbr"), Type.Array(Type.Ref("abbr"))]),
			),
			/**
			 * An annotation or note, e.g., an editorial note.
			 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
			 */
			annot: Type.Optional(
				Type.Union([Type.Ref("annot"), Type.Array(Type.Ref("annot"))]),
			),
			/**
			 * A bibliographic description of a source used in the creation of the electronic file.
			 * @see https://music-encoding.org/guidelines/v5/elements/bibl.html
			 */
			bibl: Type.Optional(
				Type.Union([Type.Ref("bibl"), Type.Array(Type.Ref("bibl"))]),
			),
			/**
			 * A bibliographic description of a source used in the creation of the electronic file.
			 * @see https://music-encoding.org/guidelines/v5/elements/biblStruct.html
			 */
			biblStruct: Type.Optional(
				Type.Union([
					Type.Ref("biblStruct"),
					Type.Array(Type.Ref("biblStruct")),
				]),
			),
			/**
			 * A calendar date, possibly with a qualifier.
			 * @see https://music-encoding.org/guidelines/v5/elements/date.html
			 */
			date: Type.Optional(
				Type.Union([Type.Ref("date"), Type.Array(Type.Ref("date"))]),
			),
			/**
			 * Entity to whom a creative work is formally offered.
			 * @see https://music-encoding.org/guidelines/v5/elements/dedicatee.html
			 */
			dedicatee: Type.Optional(
				Type.Union([Type.Ref("dedicatee"), Type.Array(Type.Ref("dedicatee"))]),
			),
			/**
			 * Description of the depth of an object.
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
			/**
			 * Information about the physical size of an entity; usually includes numerical data.
			 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
			 */
			dimensions: Type.Optional(
				Type.Union([
					Type.Ref("dimensions"),
					Type.Array(Type.Ref("dimensions")),
				]),
			),
			/**
			 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
			 */
			extent: Type.Optional(
				Type.Union([Type.Ref("extent"), Type.Array(Type.Ref("extent"))]),
			),
			/**
			 * Description of the vertical size of an object.
			 * @see https://music-encoding.org/guidelines/v5/elements/height.html
			 */
			height: Type.Optional(
				Type.Union([Type.Ref("height"), Type.Array(Type.Ref("height"))]),
			),
			/**
			 * An alpha-numeric string that establishes the identity of the described material.
			 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
			 */
			identifier: Type.Optional(
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
			/**
			 * A list of items.
			 * @see https://music-encoding.org/guidelines/v5/elements/list.html
			 */
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
			/**
			 * A numeric value.
			 * @see https://music-encoding.org/guidelines/v5/elements/num.html
			 */
			num: Type.Optional(
				Type.Union([Type.Ref("num"), Type.Array(Type.Ref("num"))]),
			),
			/**
			 * A quoted passage.
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
			/**
			 * Gathers relation elements.
			 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
			 */
			relationList: Type.Optional(
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
			/**
			 * Institution, agency, or individual which holds a bibliographic item.
			 * @see https://music-encoding.org/guidelines/v5/elements/repository.html
			 */
			repository: Type.Optional(
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
			/**
			 * A reference to a previously defined symbol.
			 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
			 */
			symbol: Type.Optional(
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
			// MEI.edittrans elements
			/**
			 * A text expansion.
			 * @see https://music-encoding.org/guidelines/v5/elements/expan.html
			 */
			expan: Type.Optional(
				Type.Union([Type.Ref("expan"), Type.Array(Type.Ref("expan"))]),
			),
			// MEI.figtable elements
			/**
			 * A figure or table.
			 * @see https://music-encoding.org/guidelines/v5/elements/fig.html
			 */
			fig: Type.Optional(
				Type.Union([Type.Ref("fig"), Type.Array(Type.Ref("fig"))]),
			),
			// MEI.header elements
			// MEI.msDesc elements
			/**
			 * A list of catchwords.
			 * @see https://music-encoding.org/guidelines/v5/elements/catchwords.html
			 */
			catchwords: Type.Optional(
				Type.Union([
					Type.Ref("catchwords"),
					Type.Array(Type.Ref("catchwords")),
				]),
			),
			/**
			 * A heraldry description.
			 * @see https://music-encoding.org/guidelines/v5/elements/heraldry.html
			 */
			heraldry: Type.Optional(
				Type.Union([Type.Ref("heraldry"), Type.Array(Type.Ref("heraldry"))]),
			),
			/**
			 * A reference to a previously defined locus.
			 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
			 */
			locus: Type.Optional(
				Type.Union([Type.Ref("locus"), Type.Array(Type.Ref("locus"))]),
			),
			/**
			 * A group of loci.
			 * @see https://music-encoding.org/guidelines/v5/elements/locusGrp.html
			 */
			locusGrp: Type.Optional(
				Type.Union([Type.Ref("locusGrp"), Type.Array(Type.Ref("locusGrp"))]),
			),
			/**
			 * A section of a manuscript.
			 * @see https://music-encoding.org/guidelines/v5/elements/secFolio.html
			 */
			secFolio: Type.Optional(
				Type.Union([Type.Ref("secFolio"), Type.Array(Type.Ref("secFolio"))]),
			),
			/**
			 * A list of signatures.
			 * @see https://music-encoding.org/guidelines/v5/elements/signatures.html
			 */
			signatures: Type.Optional(
				Type.Union([
					Type.Ref("signatures"),
					Type.Array(Type.Ref("signatures")),
				]),
			),
			/**
			 * A stamp or seal.
			 * @see https://music-encoding.org/guidelines/v5/elements/stamp.html
			 */
			stamp: Type.Optional(
				Type.Union([Type.Ref("stamp"), Type.Array(Type.Ref("stamp"))]),
			),
			// MEI.namesdates elements
			/**
			 * A corporate name.
			 * @see https://music-encoding.org/guidelines/v5/elements/corpName.html
			 */
			corpName: Type.Optional(
				Type.Union([Type.Ref("corpName"), Type.Array(Type.Ref("corpName"))]),
			),
			/**
			 * A geographic name.
			 * @see https://music-encoding.org/guidelines/v5/elements/geogName.html
			 */
			geogName: Type.Optional(
				Type.Union([Type.Ref("geogName"), Type.Array(Type.Ref("geogName"))]),
			),
			/**
			 * A personal name.
			 * @see https://music-encoding.org/guidelines/v5/elements/persName.html
			 */
			persName: Type.Optional(
				Type.Union([Type.Ref("persName"), Type.Array(Type.Ref("persName"))]),
			),
			// MEI.ptrref elements
			/**
			 * A pointer to a previously defined element.
			 * @see https://music-encoding.org/guidelines/v5/elements/ptr.html
			 */
			ptr: Type.Optional(
				Type.Union([Type.Ref("ptr"), Type.Array(Type.Ref("ptr"))]),
			),
			/**
			 * A reference to a previously defined element.
			 * @see https://music-encoding.org/guidelines/v5/elements/ref.html
			 */
			ref: Type.Optional(
				Type.Union([Type.Ref("ref"), Type.Array(Type.Ref("ref"))]),
			),
			// MEI.text elements
			/**
			 * A quoted passage.
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
