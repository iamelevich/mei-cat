import * as v from "valibot";
import { type PerfDurationData, PerfDurationSchema } from "../../header";
import {
	type BiblScopeData,
	BiblScopeSchema,
	type CreationData,
	CreationSchema,
	type GenreData,
	GenreSchema,
	type ImprintData,
	ImprintSchema,
	type ModelEditionLikeData,
	ModelEditionLikeSchema,
	type ModelRespLikeData,
	ModelRespLikeSchema,
	type PhysLocData,
	PhysLocSchema,
	type RecipientData,
	RecipientSchema,
	type RelatedItemData,
	RelatedItemSchema,
	type SeriesData,
	SeriesSchema,
	type TextLangData,
	TextLangSchema,
} from "..";

/**
 * Groups elements that may appear as part of a bibliographic description.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.biblPart.html
 */
export const ModelBiblPartSchema: v.GenericSchema<ModelBiblPartData> =
	v.intersect([
		v.object({
			/**
			 * Defines the scope of a bibliographic reference, for example as a list of page numbers, or a named subdivision of a larger work.
			 * @see https://music-encoding.org/guidelines/v5/elements/biblScope.html
			 */
			biblScope: v.optional(
				v.union([
					v.lazy(() => BiblScopeSchema),
					v.array(v.lazy(() => BiblScopeSchema)),
				]),
			),
			/**
			 * Non-bibliographic details of the creation of an intellectual entity, in narrative form, such as the date, place, and circumstances of its composition. More detailed information may be captured within the history element.
			 * @see https://music-encoding.org/guidelines/v5/elements/creation.html
			 */
			creation: v.optional(
				v.union([
					v.lazy(() => CreationSchema),
					v.array(v.lazy(() => CreationSchema)),
				]),
			),
			/**
			 * Term or terms that designate a category characterizing a particular style, form, or content.
			 * @see https://music-encoding.org/guidelines/v5/elements/genre.html
			 */
			genre: v.optional(
				v.union([
					v.lazy(() => GenreSchema),
					v.array(v.lazy(() => GenreSchema)),
				]),
			),
			/**
			 * Information relating to the publication or distribution of a bibliographic item.
			 * @see https://music-encoding.org/guidelines/v5/elements/imprint.html
			 */
			imprint: v.optional(
				v.union([
					v.lazy(() => ImprintSchema),
					v.array(v.lazy(() => ImprintSchema)),
				]),
			),
			/**
			 * Used to express the duration of performance of printed or manuscript music or the playing time for a sound recording, videorecording, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/perfDuration.html
			 */
			perfDuration: v.optional(
				v.union([
					v.lazy(() => PerfDurationSchema),
					v.array(v.lazy(() => PerfDurationSchema)),
				]),
			),
			/**
			 * Groups information about the current physical location of a bibliographic item, such as the repository in which it is located and its shelf mark(s), and its previous locations.
			 * @see https://music-encoding.org/guidelines/v5/elements/physLoc.html
			 */
			physLoc: v.optional(
				v.union([
					v.lazy(() => PhysLocSchema),
					v.array(v.lazy(() => PhysLocSchema)),
				]),
			),
			/**
			 * The name of the individual(s), institution(s) or organization(s) receiving correspondence.
			 * @see https://music-encoding.org/guidelines/v5/elements/recipient.html
			 */
			recipient: v.optional(
				v.union([
					v.lazy(() => RecipientSchema),
					v.array(v.lazy(() => RecipientSchema)),
				]),
			),
			/**
			 * Contains or references another bibliographic item which is related to the present one.
			 * @see https://music-encoding.org/guidelines/v5/elements/relatedItem.html
			 */
			relatedItem: v.optional(
				v.union([
					v.lazy(() => RelatedItemSchema),
					v.array(v.lazy(() => RelatedItemSchema)),
				]),
			),
			/**
			 * Contains information about the serial publication in which a bibliographic item has appeared.
			 * @see https://music-encoding.org/guidelines/v5/elements/series.html
			 */
			series: v.optional(
				v.union([
					v.lazy(() => SeriesSchema),
					v.array(v.lazy(() => SeriesSchema)),
				]),
			),
			/**
			 * Identifies the languages and writing systems within the work described by a bibliographic description, not the language of the description.
			 * @see https://music-encoding.org/guidelines/v5/elements/textLang.html
			 */
			textLang: v.optional(
				v.union([
					v.lazy(() => TextLangSchema),
					v.array(v.lazy(() => TextLangSchema)),
				]),
			),
		}),
		ModelEditionLikeSchema,
		ModelRespLikeSchema,
	]);

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
