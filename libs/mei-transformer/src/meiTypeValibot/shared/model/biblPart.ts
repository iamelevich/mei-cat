import * as v from "valibot";
import {
	type PerfDurationData,
	PerfDurationSchema,
} from "../../header/element/perfDuration";
import { type BiblScopeData, BiblScopeSchema } from "../element/biblScope";
import { type CreationData, CreationSchema } from "../element/creation";
import { type GenreData, GenreSchema } from "../element/genre";
import { type ImprintData, ImprintSchema } from "../element/imprint";
import { type PhysLocData, PhysLocSchema } from "../element/physLoc";
import { type RecipientData, RecipientSchema } from "../element/recipient";
import {
	type RelatedItemData,
	RelatedItemSchema,
} from "../element/relatedItem";
import { type SeriesData, SeriesSchema } from "../element/series";
import { type TextLangData, TextLangSchema } from "../element/textLang";
import {
	type ModelEditionLikeData,
	ModelEditionLikeSchema,
} from "../model/editionLike";
import { type ModelRespLikeData, ModelRespLikeSchema } from "../model/respLike";

/**
 * Groups elements that may appear as part of a bibliographic description.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.biblPart.html
 */
export const ModelBiblPartSchema: v.GenericSchema<ModelBiblPartData> = v.lazy(
	() =>
		v.intersect([
			v.object({
				/**
				 * Defines the scope of a bibliographic reference, for example as a list of page numbers, or a named subdivision of a larger work.
				 * @see https://music-encoding.org/guidelines/v5/elements/biblScope.html
				 */
				biblScope: v.optional(
					v.union([v.array(BiblScopeSchema), BiblScopeSchema]),
				),
				/**
				 * Non-bibliographic details of the creation of an intellectual entity, in narrative form, such as the date, place, and circumstances of its composition. More detailed information may be captured within the history element.
				 * @see https://music-encoding.org/guidelines/v5/elements/creation.html
				 */
				creation: v.optional(
					v.union([v.array(CreationSchema), CreationSchema]),
				),
				/**
				 * Term or terms that designate a category characterizing a particular style, form, or content.
				 * @see https://music-encoding.org/guidelines/v5/elements/genre.html
				 */
				genre: v.optional(v.union([v.array(GenreSchema), GenreSchema])),
				/**
				 * Information relating to the publication or distribution of a bibliographic item.
				 * @see https://music-encoding.org/guidelines/v5/elements/imprint.html
				 */
				imprint: v.optional(v.union([v.array(ImprintSchema), ImprintSchema])),
				/**
				 * Used to express the duration of performance of printed or manuscript music or the playing time for a sound recording, videorecording, etc.
				 * @see https://music-encoding.org/guidelines/v5/elements/perfDuration.html
				 */
				perfDuration: v.optional(
					v.union([v.array(PerfDurationSchema), PerfDurationSchema]),
				),
				/**
				 * Groups information about the current physical location of a bibliographic item, such as the repository in which it is located and its shelf mark(s), and its previous locations.
				 * @see https://music-encoding.org/guidelines/v5/elements/physLoc.html
				 */
				physLoc: v.optional(v.union([v.array(PhysLocSchema), PhysLocSchema])),
				/**
				 * The name of the individual(s), institution(s) or organization(s) receiving correspondence.
				 * @see https://music-encoding.org/guidelines/v5/elements/recipient.html
				 */
				recipient: v.optional(
					v.union([v.array(RecipientSchema), RecipientSchema]),
				),
				/**
				 * Contains or references another bibliographic item which is related to the present one.
				 * @see https://music-encoding.org/guidelines/v5/elements/relatedItem.html
				 */
				relatedItem: v.optional(
					v.union([v.array(RelatedItemSchema), RelatedItemSchema]),
				),
				/**
				 * Contains information about the serial publication in which a bibliographic item has appeared.
				 * @see https://music-encoding.org/guidelines/v5/elements/series.html
				 */
				series: v.optional(v.union([v.array(SeriesSchema), SeriesSchema])),
				/**
				 * Identifies the languages and writing systems within the work described by a bibliographic description, not the language of the description.
				 * @see https://music-encoding.org/guidelines/v5/elements/textLang.html
				 */
				textLang: v.optional(
					v.union([v.array(TextLangSchema), TextLangSchema]),
				),
			}),
			ModelEditionLikeSchema,
			ModelRespLikeSchema,
		]),
);

export type ModelBiblPartData = {
	biblScope?: BiblScopeData | BiblScopeData[];
	creation?: CreationData | CreationData[];
	genre?: GenreData | GenreData[];
	imprint?: ImprintData | ImprintData[];
	perfDuration?: PerfDurationData | PerfDurationData[];
	physLoc?: PhysLocData | PhysLocData[];
	recipient?: RecipientData | RecipientData[];
	relatedItem?: RelatedItemData | RelatedItemData[];
	series?: SeriesData | SeriesData[];
	textLang?: TextLangData | TextLangData[];
} & ModelEditionLikeData &
	ModelRespLikeData;
