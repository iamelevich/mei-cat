import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { TableSchema } from "../figtable/table";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { BiblListSchema } from "../shared/biblList";
import { CastListSchema } from "../shared/castList";
import { DivSchema } from "../shared/div";
import { EventListSchema } from "../shared/eventList";
import { HeadSchema } from "../shared/head";
import { LgSchema } from "../shared/lg";
import { ListSchema } from "../shared/list";
import { PSchema } from "../shared/p";
import { QuoteSchema } from "../shared/quote";
import { AcquisitionSchema } from "./acquisition";
import { ExhibHistSchema } from "./exhibHist";
import { ProvenanceSchema } from "./provenance";
import { TreatHistSchema } from "./treatHist";
import { TreatSchedSchema } from "./treatSched";

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
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
			// rng:zeroOrMore - acquisition, exhibHist, provenance, treatHist, treatSched, model.divLike, model.textComponentLike
			/**
			 * Records information concerning the process by which an item was acquired by the holding institution.
			 * @see https://music-encoding.org/guidelines/v5/elements/acquisition.html
			 */
			acquisition: Type.Optional(
				Type.Union([AcquisitionSchema, Type.Array(AcquisitionSchema)]),
			),
			/**
			 * A record of public exhibitions, including dates, venues, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/exhibHist.html
			 */
			exhibHist: Type.Optional(
				Type.Union([ExhibHistSchema, Type.Array(ExhibHistSchema)]),
			),
			/**
			 * The record of ownership or custodianship of an item.
			 * @see https://music-encoding.org/guidelines/v5/elements/provenance.html
			 */
			provenance: Type.Optional(
				Type.Union([ProvenanceSchema, Type.Array(ProvenanceSchema)]),
			),
			/**
			 * A record of the treatment the item has undergone (e.g., de-acidification, restoration, etc.).
			 * @see https://music-encoding.org/guidelines/v5/elements/treatHist.html
			 */
			treatHist: Type.Optional(
				Type.Union([TreatHistSchema, Type.Array(TreatHistSchema)]),
			),
			/**
			 * Scheduled treatment, e.g., de-acidification, restoration, etc., for an item.
			 * @see https://music-encoding.org/guidelines/v5/elements/treatSched.html
			 */
			treatSched: Type.Optional(
				Type.Union([TreatSchedSchema, Type.Array(TreatSchedSchema)]),
			),
			/**
			 * Major structural division of text, such as a preface, chapter or section.
			 * @see https://music-encoding.org/guidelines/v5/elements/div.html
			 */
			div: Type.Optional(Type.Union([DivSchema, Type.Array(DivSchema)])),
			/**
			 * List of bibliographic references.
			 * @see https://music-encoding.org/guidelines/v5/elements/biblList.html
			 */
			biblList: Type.Optional(
				Type.Union([BiblListSchema, Type.Array(BiblListSchema)]),
			),
			/**
			 * Contains a single cast list or dramatis personae.
			 * @see https://music-encoding.org/guidelines/v5/elements/castList.html
			 */
			castList: Type.Optional(
				Type.Union([CastListSchema, Type.Array(CastListSchema)]),
			),
			/**
			 * Contains historical information given as a sequence of significant past events.
			 * @see https://music-encoding.org/guidelines/v5/elements/eventList.html
			 */
			eventList: Type.Optional(
				Type.Union([EventListSchema, Type.Array(EventListSchema)]),
			),
			/**
			 * May be used for any section of text that is organized as a group of lines; however, it is most often used for a group of verse lines functioning as a formal unit, e.g., a stanza, refrain, verse paragraph, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/lg.html
			 */
			lg: Type.Optional(Type.Union([LgSchema, Type.Array(LgSchema)])),
			/**
			 * Contains a list of items, possibly numbered or lettered.
			 * @see https://music-encoding.org/guidelines/v5/elements/list.html
			 */
			list: Type.Optional(Type.Union([ListSchema, Type.Array(ListSchema)])),
			/**
			 * One or more text phrases that form a logical prose passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([PSchema, Type.Array(PSchema)])),
			/**
			 * Contains a paragraph-like block of text attributed to an external source, normally set off from the surrounding text by spacing or other typographic distinction.
			 * @see https://music-encoding.org/guidelines/v5/elements/quote.html
			 */
			quote: Type.Optional(Type.Union([QuoteSchema, Type.Array(QuoteSchema)])),
			/**
			 * Contains text displayed in tabular form.
			 * @see https://music-encoding.org/guidelines/v5/elements/table.html
			 */
			table: Type.Optional(Type.Union([TableSchema, Type.Array(TableSchema)])),
		},
		{ additionalProperties: false },
	),
]);

export type History = Static<typeof HistorySchema>;
