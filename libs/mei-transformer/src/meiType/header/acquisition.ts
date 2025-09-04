import { Type } from "@sinclair/typebox";
import { NotImplementedTagSchema, StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDatableSchema } from "../shared/attr/datable";
import { AttrLangSchema } from "../shared/attr/lang";
import { TitleSchema } from "../shared/title";

/**
 * Records information concerning the process by which an item was acquired by the holding institution.
 * @see https://music-encoding.org/guidelines/v5/elements/acquisition.html
 */
export const AcquisitionSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrDatableSchema,
	AttrLangSchema,
	Type.Object(
		{
			// --- MEI.edittrans Editorial and transcriptional component declarations ---
			/**
			 * A generic element for 1) a shortened form of a word, including an acronym or 2) a shorthand notation.
			 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
			 */
			abbr: Type.Optional(NotImplementedTagSchema),
			/**
			 * Contains the expansion of an abbreviation.
			 * @see https://music-encoding.org/guidelines/v5/elements/expan.html
			 */
			expan: Type.Optional(NotImplementedTagSchema),

			// --- MEI.figtable Figures and tables component declarations ---
			/**
			 * Groups elements representing or containing graphic information such as an illustration or figure.
			 * @see https://music-encoding.org/guidelines/v5/elements/fig.html
			 */
			fig: Type.Optional(NotImplementedTagSchema),

			// --- MEI.header Metadata header component declarations ---
			/**
			 * Contains a description of a watermark or similar device.
			 * @see https://music-encoding.org/guidelines/v5/elements/watermark.html
			 */
			watermark: Type.Optional(NotImplementedTagSchema),

			// --- MEI.msDesc Manuscript description component declarations ---
			/**
			 * Describes the system used to ensure correct ordering of the quires making up an item, typically by means of annotations at the foot of the page.
			 * @see https://music-encoding.org/guidelines/v5/elements/catchwords.html
			 */
			catchwords: Type.Optional(NotImplementedTagSchema),
			/**
			 * Contains a heraldic formula or phrase, typically found as part of a blazon, coat of arms, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/heraldry.html
			 */
			heraldry: Type.Optional(NotImplementedTagSchema),
			/**
			 * Defines a location within a manuscript or manuscript component, usually as a (possibly discontinuous) sequence of folio references.
			 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
			 */
			locus: Type.Optional(NotImplementedTagSchema),
			/**
			 * Groups locations which together form a distinct but discontinuous item within a manuscript or manuscript part, according to a specific foliation.
			 * @see https://music-encoding.org/guidelines/v5/elements/locusGrp.html
			 */
			locusGrp: Type.Optional(NotImplementedTagSchema),
			/**
			 * Marks the word or words taken from a fixed point in a codex (typically the beginning of the second leaf) in order to provide a unique identifier for the item.
			 * @see https://music-encoding.org/guidelines/v5/elements/secFolio.html
			 */
			secFolio: Type.Optional(NotImplementedTagSchema),
			/**
			 * Provides a description of the leaf or quire signatures found within a codex.
			 * @see https://music-encoding.org/guidelines/v5/elements/signatures.html
			 */
			signatures: Type.Optional(NotImplementedTagSchema),
			/**
			 * Contains a word or phrase describing an official mark indicating ownership, genuineness, validity, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/stamp.html
			 */
			stamp: Type.Optional(NotImplementedTagSchema),

			// --- MEI.namesdates Names and dates component declarations ---
			/**
			 * Contains the name of a geopolitical unit consisting of two or more nation states or countries.
			 * @see https://music-encoding.org/guidelines/v5/elements/bloc.html
			 */
			bloc: Type.Optional(NotImplementedTagSchema),
			/**
			 * Identifies an organization or group of people that acts as a single entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/corpName.html
			 */
			corpName: Type.Optional(NotImplementedTagSchema),
			/**
			 * Contains the name of a geopolitical unit, such as a nation, country, colony, or commonwealth, larger than or administratively superior to a region and smaller than a bloc.
			 * @see https://music-encoding.org/guidelines/v5/elements/country.html
			 */
			country: Type.Optional(NotImplementedTagSchema),
			/**
			 * Contains the name of any kind of subdivision of a settlement, such as a parish, ward, or other administrative or geographic unit.
			 * @see https://music-encoding.org/guidelines/v5/elements/district.html
			 */
			district: Type.Optional(NotImplementedTagSchema),
			/**
			 * Contains a common noun identifying a geographical feature.
			 * @see https://music-encoding.org/guidelines/v5/elements/geogFeat.html
			 */
			geogFeat: Type.Optional(NotImplementedTagSchema),
			/**
			 * The proper noun designation for a place, natural feature, or political jurisdiction.
			 * @see https://music-encoding.org/guidelines/v5/elements/geogName.html
			 */
			geogName: Type.Optional(NotImplementedTagSchema),
			/**
			 * A label that describes a period of time, such as 'Baroque' or '3rd Style period'.
			 * @see https://music-encoding.org/guidelines/v5/elements/periodName.html
			 */
			periodName: Type.Optional(NotImplementedTagSchema),
			/**
			 * Designation for an individual, including any or all of that individual's forenames, surnames, honorific titles, and added names.
			 * @see https://music-encoding.org/guidelines/v5/elements/persName.html
			 */
			persName: Type.Optional(NotImplementedTagSchema),
			/**
			 * Contains a number or other identifier for some postal delivery point other than a street address.
			 * @see https://music-encoding.org/guidelines/v5/elements/postBox.html
			 */
			postBox: Type.Optional(NotImplementedTagSchema),
			/**
			 * Contains a numerical or alphanumeric code used as part of a postal address to simplify sorting or delivery of mail.
			 * @see https://music-encoding.org/guidelines/v5/elements/postCode.html
			 */
			postCode: Type.Optional(NotImplementedTagSchema),
			/**
			 * Contains the name of an administrative unit such as a state, province, or county, larger than a settlement, but smaller than a country.
			 * @see https://music-encoding.org/guidelines/v5/elements/region.html
			 */
			region: Type.Optional(NotImplementedTagSchema),
			/**
			 * Contains the name of a settlement such as a city, town, or village identified as a single geopolitical or administrative unit.
			 * @see https://music-encoding.org/guidelines/v5/elements/settlement.html
			 */
			settlement: Type.Optional(NotImplementedTagSchema),
			/**
			 * Full street address including any name or number identifying a building as well as the name of the street or route on which it is located.
			 * @see https://music-encoding.org/guidelines/v5/elements/street.html
			 */
			street: Type.Optional(NotImplementedTagSchema),
			/**
			 * A label for a characteristic style of writing or performance, such as 'bebop' or 'rock-n-roll'.
			 * @see https://music-encoding.org/guidelines/v5/elements/styleName.html
			 */
			styleName: Type.Optional(NotImplementedTagSchema),

			// --- MEI.ptrref Pointer and reference component declarations ---
			/**
			 * Defines a traversible pointer to another location, using only attributes to describe the destination.
			 * @see https://music-encoding.org/guidelines/v5/elements/ptr.html
			 */
			ptr: Type.Optional(NotImplementedTagSchema),
			/**
			 * Defines a traversible reference to another location. May contain text and sub-elements that describe the destination.
			 * @see https://music-encoding.org/guidelines/v5/elements/ref.html
			 */
			ref: Type.Optional(NotImplementedTagSchema),

			// --- MEI.shared Component declarations that are shared between two or more modules ---
			/**
			 * Contains a postal address, for example of a publisher, an organization, or an individual.
			 * @see https://music-encoding.org/guidelines/v5/elements/address.html
			 */
			address: Type.Optional(NotImplementedTagSchema),
			/**
			 * Provides a statement explaining the text or indicating the basis for an assertion.
			 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
			 */
			annot: Type.Optional(NotImplementedTagSchema),
			/**
			 * Provides a loosely-structured bibliographic citation in which the sub-components may or may not be explicitly marked.
			 * @see https://music-encoding.org/guidelines/v5/elements/bibl.html
			 */
			bibl: Type.Optional(NotImplementedTagSchema),
			/**
			 * Contains a bibliographic citation in which bibliographic sub-elements must appear in a specified order.
			 * @see https://music-encoding.org/guidelines/v5/elements/biblStruct.html
			 */
			biblStruct: Type.Optional(NotImplementedTagSchema),
			/**
			 * A string identifying a point in time or the time period between two such points.
			 * @see https://music-encoding.org/guidelines/v5/elements/date.html
			 */
			date: Type.Optional(NotImplementedTagSchema),
			/**
			 * Entity to whom a creative work is formally offered.
			 * @see https://music-encoding.org/guidelines/v5/elements/dedicatee.html
			 */
			dedicatee: Type.Optional(NotImplementedTagSchema),
			/**
			 * Description of a measurement taken through a three-dimensional object.
			 * @see https://music-encoding.org/guidelines/v5/elements/depth.html
			 */
			depth: Type.Optional(NotImplementedTagSchema),
			/**
			 * Any single dimensional specification.
			 * @see https://music-encoding.org/guidelines/v5/elements/dim.html
			 */
			dim: Type.Optional(NotImplementedTagSchema),
			/**
			 * Information about the physical size of an entity; usually includes numerical data.
			 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
			 */
			dimensions: Type.Optional(NotImplementedTagSchema),
			/**
			 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
			 */
			extent: Type.Optional(NotImplementedTagSchema),
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(NotImplementedTagSchema),
			/**
			 * Description of the vertical size of an object.
			 * @see https://music-encoding.org/guidelines/v5/elements/height.html
			 */
			height: Type.Optional(NotImplementedTagSchema),
			/**
			 * An alpha-numeric string that establishes the identity of the described material.
			 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
			 */
			identifier: Type.Optional(NotImplementedTagSchema),
			/**
			 * An empty formatting element that forces text to begin on a new line.
			 * @see https://music-encoding.org/guidelines/v5/elements/lb.html
			 */
			lb: Type.Optional(NotImplementedTagSchema),
			/**
			 * Proper noun or noun phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/name.html
			 */
			name: Type.Optional(NotImplementedTagSchema),
			/**
			 * Numeric information in any form.
			 * @see https://music-encoding.org/guidelines/v5/elements/num.html
			 */
			num: Type.Optional(NotImplementedTagSchema),
			/**
			 * One or more text phrases that form a logical prose passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(NotImplementedTagSchema),
			/**
			 * Describes a relationship or linkage amongst entities.
			 * @see https://music-encoding.org/guidelines/v5/elements/relation.html
			 */
			relation: Type.Optional(NotImplementedTagSchema),
			/**
			 * Gathers relation elements.
			 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
			 */
			relationList: Type.Optional(NotImplementedTagSchema),
			/**
			 * A formatting element indicating special visual rendering, e.g., bold or italicized, of a text word or phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
			 */
			rend: Type.Optional(NotImplementedTagSchema),
			/**
			 * Institution, agency, or individual which holds a bibliographic item.
			 * @see https://music-encoding.org/guidelines/v5/elements/repository.html
			 */
			repository: Type.Optional(NotImplementedTagSchema),
			/**
			 * An inline table with a single column.
			 * @see https://music-encoding.org/guidelines/v5/elements/stack.html
			 */
			stack: Type.Optional(NotImplementedTagSchema),
			/**
			 * A reference to a previously defined symbol.
			 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
			 */
			symbol: Type.Optional(NotImplementedTagSchema),
			/**
			 * Keyword or phrase which describes a resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/term.html
			 */
			term: Type.Optional(NotImplementedTagSchema),
			/**
			 * Title of a bibliographic entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/title.html
			 */
			title: Type.Optional(TitleSchema),
			/**
			 * Description of the horizontal size of an object.
			 * @see https://music-encoding.org/guidelines/v5/elements/width.html
			 */
			width: Type.Optional(NotImplementedTagSchema),

			// --- MEI.text Text component declarations ---
			/**
			 * Contains material which is distinguished from the surrounding phrase-level text using quotation marks or a similar method.
			 * Use quote for block-level quotations.
			 * @see https://music-encoding.org/guidelines/v5/elements/q.html
			 */
			q: Type.Optional(NotImplementedTagSchema),
			/**
			 * Represents any segmentation of text below the "text component" level.
			 * @see https://music-encoding.org/guidelines/v5/elements/seg.html
			 */
			seg: Type.Optional(NotImplementedTagSchema),
		},
		{ additionalProperties: false },
	),
]);
