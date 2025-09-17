import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Contains the name of a geopolitical unit consisting of two or more nation states or countries.
 * @see https://music-encoding.org/guidelines/v5/elements/bloc.html
 */
export const BlocSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrFacsimileSchema,
	AttrLangSchema,
	Type.Object(
		{
			// Content model according to MEI spec:
			// rng:zeroOrMore - choice of text OR model.textPhraseLike OR model.editLike OR model.transcriptionLike
			// Text content is handled by Type.String() in the schema

			// model.textPhraseLike elements
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
			 * An empty formatting element that forces text to begin on a new line.
			 * @see https://music-encoding.org/guidelines/v5/elements/lb.html
			 */
			lb: Type.Optional(
				Type.Union([Type.Ref("lb"), Type.Array(Type.Ref("lb"))]),
			),

			/**
			 * Proper noun or noun phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/name.html
			 */
			name: Type.Optional(
				Type.Union([Type.Ref("name"), Type.Array(Type.Ref("name"))]),
			),

			/**
			 * Numeric information in any form.
			 * @see https://music-encoding.org/guidelines/v5/elements/num.html
			 */
			num: Type.Optional(
				Type.Union([Type.Ref("num"), Type.Array(Type.Ref("num"))]),
			),

			/**
			 * An empty formatting element that forces text to begin on a new page.
			 * @see https://music-encoding.org/guidelines/v5/elements/pb.html
			 */
			pb: Type.Optional(
				Type.Union([Type.Ref("pb"), Type.Array(Type.Ref("pb"))]),
			),

			/**
			 * A formatting element indicating special visual rendering, e.g., bold or italicized, of a text word or phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
			 */
			rend: Type.Optional(
				Type.Union([Type.Ref("rend"), Type.Array(Type.Ref("rend"))]),
			),

			/**
			 * Keyword or phrase which describes a resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/term.html
			 */
			term: Type.Optional(
				Type.Union([Type.Ref("term"), Type.Array(Type.Ref("term"))]),
			),

			// model.editLike elements
			/**
			 * Marks an addition to the text.
			 * @see https://music-encoding.org/guidelines/v5/elements/add.html
			 */
			add: Type.Optional(
				Type.Union([Type.Ref("add"), Type.Array(Type.Ref("add"))]),
			),

			/**
			 * Groups a number of alternative encodings for the same point in a text.
			 * @see https://music-encoding.org/guidelines/v5/elements/choice.html
			 */
			choice: Type.Optional(
				Type.Union([Type.Ref("choice"), Type.Array(Type.Ref("choice"))]),
			),

			/**
			 * Contains the correct form of an apparent erroneous passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/corr.html
			 */
			corr: Type.Optional(
				Type.Union([Type.Ref("corr"), Type.Array(Type.Ref("corr"))]),
			),

			/**
			 * Contains an area of damage to the physical medium.
			 * @see https://music-encoding.org/guidelines/v5/elements/damage.html
			 */
			damage: Type.Optional(
				Type.Union([Type.Ref("damage"), Type.Array(Type.Ref("damage"))]),
			),

			/**
			 * Contains information deleted, marked as deleted, or otherwise indicated as superfluous or spurious in the copy text by an author, scribe, annotator, or corrector.
			 * @see https://music-encoding.org/guidelines/v5/elements/del.html
			 */
			del: Type.Optional(
				Type.Union([Type.Ref("del"), Type.Array(Type.Ref("del"))]),
			),

			/**
			 * Contains the expansion of an abbreviation.
			 * @see https://music-encoding.org/guidelines/v5/elements/expan.html
			 */
			expan: Type.Optional(
				Type.Union([Type.Ref("expan"), Type.Array(Type.Ref("expan"))]),
			),

			/**
			 * Marks the beginning of a passage written in a new hand, or of a change in the scribe, writing style, ink or character of the document hand.
			 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html
			 */
			handShift: Type.Optional(
				Type.Union([Type.Ref("handShift"), Type.Array(Type.Ref("handShift"))]),
			),

			/**
			 * Contains material which is marked as following the original, rather than being normalized or corrected.
			 * @see https://music-encoding.org/guidelines/v5/elements/orig.html
			 */
			orig: Type.Optional(
				Type.Union([Type.Ref("orig"), Type.Array(Type.Ref("orig"))]),
			),

			/**
			 * Contains material which has been regularized or normalized in some sense.
			 * @see https://music-encoding.org/guidelines/v5/elements/reg.html
			 */
			reg: Type.Optional(
				Type.Union([Type.Ref("reg"), Type.Array(Type.Ref("reg"))]),
			),

			/**
			 * Indicates restoration of material to an earlier state by cancellation of an editorial or authorial marking or instruction.
			 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
			 */
			restore: Type.Optional(
				Type.Union([Type.Ref("restore"), Type.Array(Type.Ref("restore"))]),
			),

			/**
			 * Contains apparently incorrect or inaccurate material.
			 * @see https://music-encoding.org/guidelines/v5/elements/sic.html
			 */
			sic: Type.Optional(
				Type.Union([Type.Ref("sic"), Type.Array(Type.Ref("sic"))]),
			),

			/**
			 * Groups transcriptional elements when the combination is to be regarded as a single intervention in the text.
			 * @see https://music-encoding.org/guidelines/v5/elements/subst.html
			 */
			subst: Type.Optional(
				Type.Union([Type.Ref("subst"), Type.Array(Type.Ref("subst"))]),
			),

			// model.transcriptionLike elements
			/**
			 * Indicates a point where material has been omitted in a transcription, whether as part of sampling practice or for editorial reasons described in the MEI header.
			 * @see https://music-encoding.org/guidelines/v5/elements/gap.html
			 */
			gap: Type.Optional(
				Type.Union([Type.Ref("gap"), Type.Array(Type.Ref("gap"))]),
			),

			/**
			 * Contains material supplied by the transcriber or editor for any reason.
			 * @see https://music-encoding.org/guidelines/v5/elements/supplied.html
			 */
			supplied: Type.Optional(
				Type.Union([Type.Ref("supplied"), Type.Array(Type.Ref("supplied"))]),
			),

			/**
			 * Contains material that cannot be transcribed with certainty because it is illegible or inaudible in the source.
			 * @see https://music-encoding.org/guidelines/v5/elements/unclear.html
			 */
			unclear: Type.Optional(
				Type.Union([Type.Ref("unclear"), Type.Array(Type.Ref("unclear"))]),
			),

			// Additional elements that can appear in bloc content
			/**
			 * Groups elements representing or containing graphic information such as an illustration or figure.
			 * @see https://music-encoding.org/guidelines/v5/elements/fig.html
			 */
			fig: Type.Optional(
				Type.Union([Type.Ref("fig"), Type.Array(Type.Ref("fig"))]),
			),

			/**
			 * Contains a description of a watermark or similar device.
			 * @see https://music-encoding.org/guidelines/v5/elements/watermark.html
			 */
			watermark: Type.Optional(
				Type.Union([Type.Ref("watermark"), Type.Array(Type.Ref("watermark"))]),
			),

			/**
			 * Describes the system used to ensure correct ordering of the quires making up an item, typically by means of annotations at the foot of the page.
			 * @see https://music-encoding.org/guidelines/v5/elements/catchwords.html
			 */
			catchwords: Type.Optional(
				Type.Union([
					Type.Ref("catchwords"),
					Type.Array(Type.Ref("catchwords")),
				]),
			),

			/**
			 * Contains a heraldic formula or phrase, typically found as part of a blazon, coat of arms, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/heraldry.html
			 */
			heraldry: Type.Optional(
				Type.Union([Type.Ref("heraldry"), Type.Array(Type.Ref("heraldry"))]),
			),

			/**
			 * Defines a location within a manuscript or manuscript component, usually as a (possibly discontinuous) sequence of folio references.
			 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
			 */
			locus: Type.Optional(
				Type.Union([Type.Ref("locus"), Type.Array(Type.Ref("locus"))]),
			),

			/**
			 * Groups locations which together form a distinct but discontinuous item within a manuscript or manuscript part, according to a specific foliation.
			 * @see https://music-encoding.org/guidelines/v5/elements/locusGrp.html
			 */
			locusGrp: Type.Optional(
				Type.Union([Type.Ref("locusGrp"), Type.Array(Type.Ref("locusGrp"))]),
			),

			/**
			 * Marks the word or words taken from a fixed point in a codex (typically the beginning of the second leaf) in order to provide a unique identifier for the item.
			 * @see https://music-encoding.org/guidelines/v5/elements/secFolio.html
			 */
			secFolio: Type.Optional(
				Type.Union([Type.Ref("secFolio"), Type.Array(Type.Ref("secFolio"))]),
			),

			/**
			 * Provides a description of the leaf or quire signatures found within a codex.
			 * @see https://music-encoding.org/guidelines/v5/elements/signatures.html
			 */
			signatures: Type.Optional(
				Type.Union([
					Type.Ref("signatures"),
					Type.Array(Type.Ref("signatures")),
				]),
			),

			/**
			 * Contains a word or phrase describing an official mark indicating ownership, genuineness, validity, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/stamp.html
			 */
			stamp: Type.Optional(
				Type.Union([Type.Ref("stamp"), Type.Array(Type.Ref("stamp"))]),
			),

			// Names and dates elements
			/**
			 * Identifies an organization or group of people that acts as a single entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/corpName.html
			 */
			corpName: Type.Optional(
				Type.Union([Type.Ref("corpName"), Type.Array(Type.Ref("corpName"))]),
			),

			/**
			 * Contains the name of a geopolitical unit, such as a nation, country, colony, or commonwealth, larger than or administratively superior to a region and smaller than a bloc.
			 * @see https://music-encoding.org/guidelines/v5/elements/country.html
			 */
			country: Type.Optional(
				Type.Union([Type.Ref("country"), Type.Array(Type.Ref("country"))]),
			),

			/**
			 * Contains the name of any kind of subdivision of a settlement, such as a parish, ward, or other administrative or geographic unit.
			 * @see https://music-encoding.org/guidelines/v5/elements/district.html
			 */
			district: Type.Optional(
				Type.Union([Type.Ref("district"), Type.Array(Type.Ref("district"))]),
			),

			/**
			 * Contains a common noun identifying a geographical feature.
			 * @see https://music-encoding.org/guidelines/v5/elements/geogFeat.html
			 */
			geogFeat: Type.Optional(
				Type.Union([Type.Ref("geogFeat"), Type.Array(Type.Ref("geogFeat"))]),
			),

			/**
			 * The proper noun designation for a place, natural feature, or political jurisdiction.
			 * @see https://music-encoding.org/guidelines/v5/elements/geogName.html
			 */
			geogName: Type.Optional(
				Type.Union([Type.Ref("geogName"), Type.Array(Type.Ref("geogName"))]),
			),

			/**
			 * A label that describes a period of time, such as 'Baroque' or '3rd Style period'.
			 * @see https://music-encoding.org/guidelines/v5/elements/periodName.html
			 */
			periodName: Type.Optional(
				Type.Union([
					Type.Ref("periodName"),
					Type.Array(Type.Ref("periodName")),
				]),
			),

			/**
			 * Designation for an individual, including any or all of that individual's forenames, surnames, honorific titles, and added names.
			 * @see https://music-encoding.org/guidelines/v5/elements/persName.html
			 */
			persName: Type.Optional(
				Type.Union([Type.Ref("persName"), Type.Array(Type.Ref("persName"))]),
			),

			/**
			 * Contains a number or other identifier for some postal delivery point other than a street address.
			 * @see https://music-encoding.org/guidelines/v5/elements/postBox.html
			 */
			postBox: Type.Optional(
				Type.Union([Type.Ref("postBox"), Type.Array(Type.Ref("postBox"))]),
			),

			/**
			 * Contains a numerical or alphanumeric code used as part of a postal address to simplify sorting or delivery of mail.
			 * @see https://music-encoding.org/guidelines/v5/elements/postCode.html
			 */
			postCode: Type.Optional(
				Type.Union([Type.Ref("postCode"), Type.Array(Type.Ref("postCode"))]),
			),

			/**
			 * Contains the name of an administrative unit such as a state, province, or county, larger than a settlement, but smaller than a country.
			 * @see https://music-encoding.org/guidelines/v5/elements/region.html
			 */
			region: Type.Optional(
				Type.Union([Type.Ref("region"), Type.Array(Type.Ref("region"))]),
			),

			/**
			 * Contains the name of a settlement such as a city, town, or village identified as a single geopolitical or administrative unit.
			 * @see https://music-encoding.org/guidelines/v5/elements/settlement.html
			 */
			settlement: Type.Optional(
				Type.Union([
					Type.Ref("settlement"),
					Type.Array(Type.Ref("settlement")),
				]),
			),

			/**
			 * Full street address including any name or number identifying a building as well as the name of the street or route on which it is located.
			 * @see https://music-encoding.org/guidelines/v5/elements/street.html
			 */
			street: Type.Optional(
				Type.Union([Type.Ref("street"), Type.Array(Type.Ref("street"))]),
			),

			/**
			 * A label for a characteristic style of writing or performance, such as 'bebop' or 'rock-n-roll'.
			 * @see https://music-encoding.org/guidelines/v5/elements/styleName.html
			 */
			styleName: Type.Optional(
				Type.Union([Type.Ref("styleName"), Type.Array(Type.Ref("styleName"))]),
			),

			// Pointer and reference elements
			/**
			 * Defines a traversible pointer to another location, using only attributes to describe the destination.
			 * @see https://music-encoding.org/guidelines/v5/elements/ptr.html
			 */
			ptr: Type.Optional(
				Type.Union([Type.Ref("ptr"), Type.Array(Type.Ref("ptr"))]),
			),

			/**
			 * Defines a traversible reference to another location. May contain text and sub-elements that describe the destination.
			 * @see https://music-encoding.org/guidelines/v5/elements/ref.html
			 */
			ref: Type.Optional(
				Type.Union([Type.Ref("ref"), Type.Array(Type.Ref("ref"))]),
			),

			// Shared elements
			/**
			 * Contains a postal address, for example of a publisher, an organization, or an individual.
			 * @see https://music-encoding.org/guidelines/v5/elements/address.html
			 */
			address: Type.Optional(
				Type.Union([Type.Ref("address"), Type.Array(Type.Ref("address"))]),
			),

			/**
			 * Provides a loosely-structured bibliographic citation in which the sub-components may or may not be explicitly marked.
			 * @see https://music-encoding.org/guidelines/v5/elements/bibl.html
			 */
			bibl: Type.Optional(
				Type.Union([Type.Ref("bibl"), Type.Array(Type.Ref("bibl"))]),
			),

			/**
			 * Contains a bibliographic citation in which bibliographic sub-elements must appear in a specified order.
			 * @see https://music-encoding.org/guidelines/v5/elements/biblStruct.html
			 */
			biblStruct: Type.Optional(
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

			/**
			 * Entity to whom a creative work is formally offered.
			 * @see https://music-encoding.org/guidelines/v5/elements/dedic.html
			 */
			dedic: Type.Optional(
				Type.Union([Type.Ref("dedic"), Type.Array(Type.Ref("dedic"))]),
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

			// Text elements
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
