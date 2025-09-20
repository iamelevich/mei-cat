import * as v from "valibot";
import {
	type AccessRestrictData,
	AccessRestrictSchema,
} from "../../header/element/accessRestrict";
import { type BylineData, BylineSchema } from "../../header/element/byline";
import {
	type ContentsData,
	ContentsSchema,
} from "../../header/element/contents";
import {
	type DedicationData,
	DedicationSchema,
} from "../../header/element/dedication";
import {
	type PerfDurationData,
	PerfDurationSchema,
} from "../../header/element/perfDuration";
import {
	type PerfMediumData,
	PerfMediumSchema,
} from "../../header/element/perfMedium";
import {
	type PlateNumData,
	PlateNumSchema,
} from "../../header/element/plateNum";
import { type PriceData, PriceSchema } from "../../header/element/price";
import { type SysReqData, SysReqSchema } from "../../header/element/sysReq";
import {
	type UseRestrictData,
	UseRestrictSchema,
} from "../../header/element/useRestrict";
import { type ArgumentData, ArgumentSchema } from "../../text/element/argument";
import { type EpigraphData, EpigraphSchema } from "../../text/element/epigraph";
import {
	type ImprimaturData,
	ImprimaturSchema,
} from "../../text/element/imprimatur";
import { type ImprintData, ImprintSchema } from "../element/imprint";
import { type SeriesData, SeriesSchema } from "../element/series";
import { type TitlePartData, TitlePartSchema } from "../element/titlePart";
import { type ModelDateLikeData, ModelDateLikeSchema } from "./dateLike";
import {
	type ModelEditionLikeData,
	ModelEditionLikeSchema,
} from "./editionLike";
import {
	type ModelIdentifierLikeData,
	ModelIdentifierLikeSchema,
} from "./identifierLike";
import {
	type ModelRespLikePartData,
	ModelRespLikePartSchema,
} from "./respLikePart";
import { type ModelTitleLikeData, ModelTitleLikeSchema } from "./titleLike";

/**
 * Groups elements that may appear as part of a title page transcription.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.titlePagePart.html
 */
export const ModelTitlePagePartSchema: v.GenericSchema<ModelTitlePagePartData> =
	v.lazy(() =>
		v.intersect([
			v.object({
				/**
				 * Describes the conditions that affect the accessibility of material.
				 * @see https://music-encoding.org/guidelines/v5/elements/accessRestrict.html
				 */
				accessRestrict: v.optional(
					v.union([v.array(AccessRestrictSchema), AccessRestrictSchema]),
				),
				/**
				 * Contains a formal list or prose description of topics addressed.
				 * @see https://music-encoding.org/guidelines/v5/elements/argument.html
				 */
				argument: v.optional(
					v.union([v.array(ArgumentSchema), ArgumentSchema]),
				),
				/**
				 * Contains the primary statement of responsibility given for a work on its title page.
				 * @see https://music-encoding.org/guidelines/v5/elements/byline.html
				 */
				byline: v.optional(v.union([v.array(BylineSchema), BylineSchema])),
				/**
				 * List of the material contained within a resource.
				 * @see https://music-encoding.org/guidelines/v5/elements/contents.html
				 */
				contents: v.optional(
					v.union([v.array(ContentsSchema), ContentsSchema]),
				),
				/**
				 * Contains a dedicatory statement.
				 * @see https://music-encoding.org/guidelines/v5/elements/dedication.html
				 */
				dedication: v.optional(
					v.union([v.array(DedicationSchema), DedicationSchema]),
				),
				/**
				 * Contains a quotation, anonymous or attributed, appearing on a title page.
				 * @see https://music-encoding.org/guidelines/v5/elements/epigraph.html
				 */
				epigraph: v.optional(
					v.union([v.array(EpigraphSchema), EpigraphSchema]),
				),
				/**
				 * Contains a formal statement authorizing the publication of a work, sometimes required to appear on a title page or its verso.
				 * @see https://music-encoding.org/guidelines/v5/elements/imprimatur.html
				 */
				imprimatur: v.optional(
					v.union([v.array(ImprimaturSchema), ImprimaturSchema]),
				),
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
				 * Indicates the number and character of the performing forces used in a musical composition.
				 * @see https://music-encoding.org/guidelines/v5/elements/perfMedium.html
				 */
				perfMedium: v.optional(
					v.union([v.array(PerfMediumSchema), PerfMediumSchema]),
				),
				/**
				 * Designation assigned to a resource by a music publisher, usually printed at the bottom of each page, and sometimes appearing also on the title page.
				 * @see https://music-encoding.org/guidelines/v5/elements/plateNum.html
				 */
				plateNum: v.optional(
					v.union([v.array(PlateNumSchema), PlateNumSchema]),
				),
				/**
				 * The cost of access to a bibliographic item.
				 * @see https://music-encoding.org/guidelines/v5/elements/price.html
				 */
				price: v.optional(v.union([v.array(PriceSchema), PriceSchema])),
				/**
				 * Contains information about the serial publication in which a bibliographic item has appeared.
				 * @see https://music-encoding.org/guidelines/v5/elements/series.html
				 */
				series: v.optional(v.union([v.array(SeriesSchema), SeriesSchema])),
				/**
				 * System requirements for using the electronic item.
				 * @see https://music-encoding.org/guidelines/v5/elements/sysReq.html
				 */
				sysReq: v.optional(v.union([v.array(SysReqSchema), SysReqSchema])),
				/**
				 * Contains a subsection or division of the title of a bibliographic entity.
				 * @see https://music-encoding.org/guidelines/v5/elements/titlePart.html
				 */
				titlePart: v.optional(
					v.union([v.array(TitlePartSchema), TitlePartSchema]),
				),
				/**
				 * Container for information about the conditions that affect use of a bibliographic item after access has been granted.
				 * @see https://music-encoding.org/guidelines/v5/elements/useRestrict.html
				 */
				useRestrict: v.optional(
					v.union([v.array(UseRestrictSchema), UseRestrictSchema]),
				),
			}),
			ModelDateLikeSchema,
			ModelEditionLikeSchema,
			ModelIdentifierLikeSchema,
			ModelRespLikePartSchema,
			ModelTitleLikeSchema,
		]),
	);

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
