import * as v from "valibot";
import {
	type AccessRestrictData,
	AccessRestrictSchema,
	type BylineData,
	BylineSchema,
	type ContentsData,
	ContentsSchema,
	type DedicationData,
	DedicationSchema,
	type PerfDurationData,
	PerfDurationSchema,
	type PerfMediumData,
	PerfMediumSchema,
	type PlateNumData,
	PlateNumSchema,
	type PriceData,
	PriceSchema,
	type SysReqData,
	SysReqSchema,
	type UseRestrictData,
	UseRestrictSchema,
} from "../../header";
import {
	type ArgumentData,
	ArgumentSchema,
	type EpigraphData,
	EpigraphSchema,
	type ImprimaturData,
	ImprimaturSchema,
} from "../../text";
import {
	type ImprintData,
	ImprintSchema,
	type ModelDateLikeData,
	ModelDateLikeSchema,
	type ModelEditionLikeData,
	ModelEditionLikeSchema,
	type ModelIdentifierLikeData,
	ModelIdentifierLikeSchema,
	type ModelRespLikePartData,
	ModelRespLikePartSchema,
	type ModelTitleLikeData,
	ModelTitleLikeSchema,
	type SeriesData,
	SeriesSchema,
	type TitlePartData,
	TitlePartSchema,
} from "..";

/**
 * Groups elements that may appear as part of a title page transcription.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.titlePagePart.html
 */
export const ModelTitlePagePartSchema: v.GenericSchema<ModelTitlePagePartData> =
	v.intersect([
		v.object({
			/**
			 * Describes the conditions that affect the accessibility of material.
			 * @see https://music-encoding.org/guidelines/v5/elements/accessRestrict.html
			 */
			accessRestrict: v.optional(
				v.union([
					v.lazy(() => AccessRestrictSchema),
					v.array(v.lazy(() => AccessRestrictSchema)),
				]),
			),
			/**
			 * Contains a formal list or prose description of topics addressed.
			 * @see https://music-encoding.org/guidelines/v5/elements/argument.html
			 */
			argument: v.optional(
				v.union([
					v.lazy(() => ArgumentSchema),
					v.array(v.lazy(() => ArgumentSchema)),
				]),
			),
			/**
			 * Contains the primary statement of responsibility given for a work on its title page.
			 * @see https://music-encoding.org/guidelines/v5/elements/byline.html
			 */
			byline: v.optional(
				v.union([
					v.lazy(() => BylineSchema),
					v.array(v.lazy(() => BylineSchema)),
				]),
			),
			/**
			 * List of the material contained within a resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/contents.html
			 */
			contents: v.optional(
				v.union([
					v.lazy(() => ContentsSchema),
					v.array(v.lazy(() => ContentsSchema)),
				]),
			),
			/**
			 * Contains a dedicatory statement.
			 * @see https://music-encoding.org/guidelines/v5/elements/dedication.html
			 */
			dedication: v.optional(
				v.union([
					v.lazy(() => DedicationSchema),
					v.array(v.lazy(() => DedicationSchema)),
				]),
			),
			/**
			 * Contains a quotation, anonymous or attributed, appearing on a title page.
			 * @see https://music-encoding.org/guidelines/v5/elements/epigraph.html
			 */
			epigraph: v.optional(
				v.union([
					v.lazy(() => EpigraphSchema),
					v.array(v.lazy(() => EpigraphSchema)),
				]),
			),
			/**
			 * Contains a formal statement authorizing the publication of a work, sometimes required to appear on a title page or its verso.
			 * @see https://music-encoding.org/guidelines/v5/elements/imprimatur.html
			 */
			imprimatur: v.optional(
				v.union([
					v.lazy(() => ImprimaturSchema),
					v.array(v.lazy(() => ImprimaturSchema)),
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
			 * Indicates the number and character of the performing forces used in a musical composition.
			 * @see https://music-encoding.org/guidelines/v5/elements/perfMedium.html
			 */
			perfMedium: v.optional(
				v.union([
					v.lazy(() => PerfMediumSchema),
					v.array(v.lazy(() => PerfMediumSchema)),
				]),
			),
			/**
			 * Designation assigned to a resource by a music publisher, usually printed at the bottom of each page, and sometimes appearing also on the title page.
			 * @see https://music-encoding.org/guidelines/v5/elements/plateNum.html
			 */
			plateNum: v.optional(
				v.union([
					v.lazy(() => PlateNumSchema),
					v.array(v.lazy(() => PlateNumSchema)),
				]),
			),
			/**
			 * The cost of access to a bibliographic item.
			 * @see https://music-encoding.org/guidelines/v5/elements/price.html
			 */
			price: v.optional(
				v.union([
					v.lazy(() => PriceSchema),
					v.array(v.lazy(() => PriceSchema)),
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
			 * System requirements for using the electronic item.
			 * @see https://music-encoding.org/guidelines/v5/elements/sysReq.html
			 */
			sysReq: v.optional(
				v.union([
					v.lazy(() => SysReqSchema),
					v.array(v.lazy(() => SysReqSchema)),
				]),
			),
			/**
			 * Contains a subsection or division of the title of a bibliographic entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/titlePart.html
			 */
			titlePart: v.optional(
				v.union([
					v.lazy(() => TitlePartSchema),
					v.array(v.lazy(() => TitlePartSchema)),
				]),
			),
			/**
			 * Container for information about the conditions that affect use of a bibliographic item after access has been granted.
			 * @see https://music-encoding.org/guidelines/v5/elements/useRestrict.html
			 */
			useRestrict: v.optional(
				v.union([
					v.lazy(() => UseRestrictSchema),
					v.array(v.lazy(() => UseRestrictSchema)),
				]),
			),
		}),
		ModelDateLikeSchema,
		ModelEditionLikeSchema,
		ModelIdentifierLikeSchema,
		ModelRespLikePartSchema,
		ModelTitleLikeSchema,
	]);

export type ModelTitlePagePartData = {
	accessRestrict?: AccessRestrictData | AccessRestrictData[];
	argument?: ArgumentData | ArgumentData[];
	byline?: BylineData | BylineData[];
	contents?: ContentsData | ContentsData[];
	dedication?: DedicationData | DedicationData[];
	epigraph?: EpigraphData | EpigraphData[];
	imprimatur?: ImprimaturData | ImprimaturData[];
	imprint?: ImprintData | ImprintData[];
	perfDuration?: PerfDurationData | PerfDurationData[];
	perfMedium?: PerfMediumData | PerfMediumData[];
	plateNum?: PlateNumData | PlateNumData[];
	price?: PriceData | PriceData[];
	series?: SeriesData | SeriesData[];
	sysReq?: SysReqData | SysReqData[];
	titlePart?: TitlePartData | TitlePartData[];
	useRestrict?: UseRestrictData | UseRestrictData[];
} & ModelDateLikeData &
	ModelEditionLikeData &
	ModelIdentifierLikeData &
	ModelRespLikePartData &
	ModelTitleLikeData;
