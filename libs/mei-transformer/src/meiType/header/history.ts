import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Provides a container for information about the history of a resource other than the circumstances of its creation.
 * @see https://music-encoding.org/guidelines/v5/elements/history.html
 */
export const HistorySchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	Type.Object(
		{
			// rng:zeroOrMore - model.headLike
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),
			// rng:zeroOrMore - acquisition, exhibHist, provenance, treatHist, treatSched, model.divLike, model.textComponentLike
			/**
			 * Records information concerning the process by which an item was acquired by the holding institution.
			 * @see https://music-encoding.org/guidelines/v5/elements/acquisition.html
			 */
			acquisition: Type.Optional(
				Type.Union([
					Type.Ref("acquisition"),
					Type.Array(Type.Ref("acquisition")),
				]),
			),
			/**
			 * A record of public exhibitions, including dates, venues, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/exhibHist.html
			 */
			exhibHist: Type.Optional(
				Type.Union([Type.Ref("exhibHist"), Type.Array(Type.Ref("exhibHist"))]),
			),
			/**
			 * The record of ownership or custodianship of an item.
			 * @see https://music-encoding.org/guidelines/v5/elements/provenance.html
			 */
			provenance: Type.Optional(
				Type.Union([
					Type.Ref("provenance"),
					Type.Array(Type.Ref("provenance")),
				]),
			),
			/**
			 * A record of the treatment the item has undergone (e.g., de-acidification, restoration, etc.).
			 * @see https://music-encoding.org/guidelines/v5/elements/treatHist.html
			 */
			treatHist: Type.Optional(
				Type.Union([Type.Ref("treatHist"), Type.Array(Type.Ref("treatHist"))]),
			),
			/**
			 * Scheduled treatment, e.g., de-acidification, restoration, etc., for an item.
			 * @see https://music-encoding.org/guidelines/v5/elements/treatSched.html
			 */
			treatSched: Type.Optional(
				Type.Union([
					Type.Ref("treatSched"),
					Type.Array(Type.Ref("treatSched")),
				]),
			),
			/**
			 * Major structural division of text, such as a preface, chapter or section.
			 * @see https://music-encoding.org/guidelines/v5/elements/div.html
			 */
			div: Type.Optional(
				Type.Union([Type.Ref("div"), Type.Array(Type.Ref("div"))]),
			),
			/**
			 * List of bibliographic references.
			 * @see https://music-encoding.org/guidelines/v5/elements/biblList.html
			 */
			biblList: Type.Optional(
				Type.Union([Type.Ref("biblList"), Type.Array(Type.Ref("biblList"))]),
			),
			/**
			 * Contains a single cast list or dramatis personae.
			 * @see https://music-encoding.org/guidelines/v5/elements/castList.html
			 */
			castList: Type.Optional(
				Type.Union([Type.Ref("castList"), Type.Array(Type.Ref("castList"))]),
			),
			/**
			 * Contains historical information given as a sequence of significant past events.
			 * @see https://music-encoding.org/guidelines/v5/elements/eventList.html
			 */
			eventList: Type.Optional(
				Type.Union([Type.Ref("eventList"), Type.Array(Type.Ref("eventList"))]),
			),
			/**
			 * May be used for any section of text that is organized as a group of lines; however, it is most often used for a group of verse lines functioning as a formal unit, e.g., a stanza, refrain, verse paragraph, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/lg.html
			 */
			lg: Type.Optional(
				Type.Union([Type.Ref("lg"), Type.Array(Type.Ref("lg"))]),
			),
			/**
			 * Contains a list of items, possibly numbered or lettered.
			 * @see https://music-encoding.org/guidelines/v5/elements/list.html
			 */
			list: Type.Optional(
				Type.Union([Type.Ref("list"), Type.Array(Type.Ref("list"))]),
			),
			/**
			 * One or more text phrases that form a logical prose passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([Type.Ref("p"), Type.Array(Type.Ref("p"))])),
			/**
			 * Contains a paragraph-like block of text attributed to an external source, normally set off from the surrounding text by spacing or other typographic distinction.
			 * @see https://music-encoding.org/guidelines/v5/elements/quote.html
			 */
			quote: Type.Optional(
				Type.Union([Type.Ref("quote"), Type.Array(Type.Ref("quote"))]),
			),
			/**
			 * Contains text displayed in tabular form.
			 * @see https://music-encoding.org/guidelines/v5/elements/table.html
			 */
			table: Type.Optional(
				Type.Union([Type.Ref("table"), Type.Array(Type.Ref("table"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
