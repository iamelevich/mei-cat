import * as v from "valibot";
import { type AccMatData, AccMatSchema } from "../../msDesc/element/accMat";
import { type AddDescData, AddDescSchema } from "../../msDesc/element/addDesc";
import {
	type BindingDescData,
	BindingDescSchema,
} from "../../msDesc/element/bindingDesc";
import {
	type CatchwordsData,
	CatchwordsSchema,
} from "../../msDesc/element/catchwords";
import {
	type ColophonData,
	ColophonSchema,
} from "../../msDesc/element/colophon";
import {
	type DecoDescData,
	DecoDescSchema,
} from "../../msDesc/element/decoDesc";
import {
	type ExplicitData,
	ExplicitSchema,
} from "../../msDesc/element/explicit";
import {
	type HeraldryData,
	HeraldrySchema,
} from "../../msDesc/element/heraldry";
import {
	type LayoutDescData,
	LayoutDescSchema,
} from "../../msDesc/element/layoutDesc";
import { type RubricData, RubricSchema } from "../../msDesc/element/rubric";
import {
	type ScriptDescData,
	ScriptDescSchema,
} from "../../msDesc/element/scriptDesc";
import {
	type SealDescData,
	SealDescSchema,
} from "../../msDesc/element/sealDesc";
import {
	type SecFolioData,
	SecFolioSchema,
} from "../../msDesc/element/secFolio";
import {
	type SignaturesData,
	SignaturesSchema,
} from "../../msDesc/element/signatures";
import { type StampData, StampSchema } from "../../msDesc/element/stamp";
import {
	type SupportDescData,
	SupportDescSchema,
} from "../../msDesc/element/supportDesc";
import {
	type TypeDescData,
	TypeDescSchema,
} from "../../msDesc/element/typeDesc";
import {
	type DimensionsData,
	DimensionsSchema,
} from "../../shared/element/dimensions";
import { type ExtentData, ExtentSchema } from "../../shared/element/extent";
import {
	type TitlePageData,
	TitlePageSchema,
} from "../../shared/element/titlePage";
import {
	type ModelIncipLikeData,
	ModelIncipLikeSchema,
} from "../../shared/model/incipLike";
import {
	type CaptureModeData,
	CaptureModeSchema,
} from "../element/captureMode";
import {
	type CarrierFormData,
	CarrierFormSchema,
} from "../element/carrierForm";
import { type ConditionData, ConditionSchema } from "../element/condition";
import { type FileCharData, FileCharSchema } from "../element/fileChar";
import { type FoliaDescData, FoliaDescSchema } from "../element/foliaDesc";
import { type HandListData, HandListSchema } from "../element/handList";
import { type HistoryData, HistorySchema } from "../element/history";
import {
	type InscriptionData,
	InscriptionSchema,
} from "../element/inscription";
import {
	type PerfDurationData,
	PerfDurationSchema,
} from "../element/perfDuration";
import { type PhysMediumData, PhysMediumSchema } from "../element/physMedium";
import { type PlateNumData, PlateNumSchema } from "../element/plateNum";
import {
	type PlayingSpeedData,
	PlayingSpeedSchema,
} from "../element/playingSpeed";
import {
	type ScoreFormatData,
	ScoreFormatSchema,
} from "../element/scoreFormat";
import { type SoundChanData, SoundChanSchema } from "../element/soundChan";
import { type SpecReproData, SpecReproSchema } from "../element/specRepro";
import {
	type TrackConfigData,
	TrackConfigSchema,
} from "../element/trackConfig";
import { type WatermarkData, WatermarkSchema } from "../element/watermark";

/**
 * Groups elements that may appear as part of the physical description of a bibliographic item.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.physDescPart.html
 */
export const ModelPhysDescPartSchema: v.GenericSchema<ModelPhysDescPartData> =
	v.lazy(() =>
		v.intersect([
			v.object({
				/**
				 * Holds a description of any additional material bound with an item, such as non-contemporaneous documents or fragments.
				 * @see https://music-encoding.org/guidelines/v5/elements/accMat.html
				 */
				accMat: v.optional(v.union([AccMatSchema, v.array(AccMatSchema)])),
				/**
				 * Provides a description of significant additions found within an item, such as marginalia or other annotations.
				 * @see https://music-encoding.org/guidelines/v5/elements/addDesc.html
				 */
				addDesc: v.optional(v.union([AddDescSchema, v.array(AddDescSchema)])),
				/**
				 * Describes the present and former bindings of an item.
				 * @see https://music-encoding.org/guidelines/v5/elements/bindingDesc.html
				 */
				bindingDesc: v.optional(
					v.union([BindingDescSchema, v.array(BindingDescSchema)]),
				),
				/**
				 * The means used to record notation, sound, or images in the production of a source/manifestation ( e.g. , analogue, acoustic, electric, digital, optical etc.).
				 * @see https://music-encoding.org/guidelines/v5/elements/captureMode.html
				 */
				captureMode: v.optional(
					v.union([CaptureModeSchema, v.array(CaptureModeSchema)]),
				),
				/**
				 * The specific class of material to which the physical carrier of the source/manifestation belongs ( e.g. , sound cassette, videodisc, microfilm cartridge, transparency, etc.). The carrier for a manifestation comprising multiple physical components may include more than one form ( e.g. , a filmstrip with an accompanying booklet, a separate sound disc carrying the sound track for a film, etc.).
				 * @see https://music-encoding.org/guidelines/v5/elements/carrierForm.html
				 */
				carrierForm: v.optional(
					v.union([CarrierFormSchema, v.array(CarrierFormSchema)]),
				),
				/**
				 * Describes the system used to ensure correct ordering of the quires making up an item, typically by means of annotations at the foot of the page.
				 * @see https://music-encoding.org/guidelines/v5/elements/catchwords.html
				 */
				catchwords: v.optional(
					v.union([CatchwordsSchema, v.array(CatchwordsSchema)]),
				),
				/**
				 * Contains a statement providing information regarding the date, place, agency, or reason for production of the item.
				 * @see https://music-encoding.org/guidelines/v5/elements/colophon.html
				 */
				colophon: v.optional(
					v.union([ColophonSchema, v.array(ColophonSchema)]),
				),
				/**
				 * The physical condition of an item, particularly any variances between the physical make-up of the item and that of other copies of the same item ( e.g. , missing pages or plates, brittleness, faded images, etc.).
				 * @see https://music-encoding.org/guidelines/v5/elements/condition.html
				 */
				condition: v.optional(
					v.union([ConditionSchema, v.array(ConditionSchema)]),
				),
				/**
				 * Contains a description of the decoration of an item.
				 * @see https://music-encoding.org/guidelines/v5/elements/decoDesc.html
				 */
				decoDesc: v.optional(
					v.union([DecoDescSchema, v.array(DecoDescSchema)]),
				),
				/**
				 * Information about the physical size of an entity; usually includes numerical data.
				 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
				 */
				dimensions: v.optional(
					v.union([DimensionsSchema, v.array(DimensionsSchema)]),
				),
				/**
				 * Contains the explicit of a manuscript item; that is, the closing words of the text proper, exclusive of any rubric or colophon which might follow it.
				 * @see https://music-encoding.org/guidelines/v5/elements/explicit.html
				 */
				explicit: v.optional(
					v.union([ExplicitSchema, v.array(ExplicitSchema)]),
				),
				/**
				 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
				 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
				 */
				extent: v.optional(v.union([ExtentSchema, v.array(ExtentSchema)])),
				/**
				 * Standards or schemes used to encode the file ( e.g. , ASCII, SGML, etc.), physical characteristics of the file ( e.g. , recording density, parity, blocking, etc.), and other characteristics that have a bearing on how the file can be processed.
				 * @see https://music-encoding.org/guidelines/v5/elements/fileChar.html
				 */
				fileChar: v.optional(
					v.union([FileCharSchema, v.array(FileCharSchema)]),
				),
				/**
				 * Describes the order of folia and bifolia making up the text block of a manuscript or print.
				 * @see https://music-encoding.org/guidelines/v5/elements/foliaDesc.html
				 */
				foliaDesc: v.optional(
					v.union([FoliaDescSchema, v.array(FoliaDescSchema)]),
				),
				/**
				 * Container for one or more hand elements.
				 * @see https://music-encoding.org/guidelines/v5/elements/handList.html
				 */
				handList: v.optional(
					v.union([HandListSchema, v.array(HandListSchema)]),
				),
				/**
				 * Contains a heraldic formula or phrase, typically found as part of a blazon, coat of arms, etc.
				 * @see https://music-encoding.org/guidelines/v5/elements/heraldry.html
				 */
				heraldry: v.optional(
					v.union([HeraldrySchema, v.array(HeraldrySchema)]),
				),
				/**
				 * Provides a container for information about the history of a resource other than the circumstances of its creation.
				 * @see https://music-encoding.org/guidelines/v5/elements/history.html
				 */
				history: v.optional(v.union([HistorySchema, v.array(HistorySchema)])),
				/**
				 * An inscription added to an item, such as a bookplate, a note designating the item as a gift, and/or the author’s signature.
				 * @see https://music-encoding.org/guidelines/v5/elements/inscription.html
				 */
				inscription: v.optional(
					v.union([InscriptionSchema, v.array(InscriptionSchema)]),
				),
				/**
				 * Collects layout descriptions.
				 * @see https://music-encoding.org/guidelines/v5/elements/layoutDesc.html
				 */
				layoutDesc: v.optional(
					v.union([LayoutDescSchema, v.array(LayoutDescSchema)]),
				),
				/**
				 * Used to express the duration of performance of printed or manuscript music or the playing time for a sound recording, videorecording, etc.
				 * @see https://music-encoding.org/guidelines/v5/elements/perfDuration.html
				 */
				perfDuration: v.optional(
					v.union([PerfDurationSchema, v.array(PerfDurationSchema)]),
				),
				/**
				 * Records the physical materials used in the source, such as ink and paper.
				 * @see https://music-encoding.org/guidelines/v5/elements/physMedium.html
				 */
				physMedium: v.optional(
					v.union([PhysMediumSchema, v.array(PhysMediumSchema)]),
				),
				/**
				 * Designation assigned to a resource by a music publisher, usually printed at the bottom of each page, and sometimes appearing also on the title page.
				 * @see https://music-encoding.org/guidelines/v5/elements/plateNum.html
				 */
				plateNum: v.optional(
					v.union([PlateNumSchema, v.array(PlateNumSchema)]),
				),
				/**
				 * Playing speed for a sound recording is the speed at which the carrier must be operated to produce the sound intended ( e.g. , 33 1/3 rpm, 19 cm/s, etc.).
				 * @see https://music-encoding.org/guidelines/v5/elements/playingSpeed.html
				 */
				playingSpeed: v.optional(
					v.union([PlayingSpeedSchema, v.array(PlayingSpeedSchema)]),
				),
				/**
				 * Contains a string of words through which a manuscript signals the beginning or end of a text division, often with an assertion as to its author and title, which is in some way set off from the text itself, usually in red ink, or by use of different size or type of script, or some other such visual device.
				 * @see https://music-encoding.org/guidelines/v5/elements/rubric.html
				 */
				rubric: v.optional(v.union([RubricSchema, v.array(RubricSchema)])),
				/**
				 * Describes the type of score used to represent a musical composition ( e.g. , short score, full score, condensed score, close score, etc.).
				 * @see https://music-encoding.org/guidelines/v5/elements/scoreFormat.html
				 */
				scoreFormat: v.optional(
					v.union([ScoreFormatSchema, v.array(ScoreFormatSchema)]),
				),
				/**
				 * Contains a description of the letters or characters used in an autographic item.
				 * @see https://music-encoding.org/guidelines/v5/elements/scriptDesc.html
				 */
				scriptDesc: v.optional(
					v.union([ScriptDescSchema, v.array(ScriptDescSchema)]),
				),
				/**
				 * Describes the seals or similar external attachments applied to an item.
				 * @see https://music-encoding.org/guidelines/v5/elements/sealDesc.html
				 */
				sealDesc: v.optional(
					v.union([SealDescSchema, v.array(SealDescSchema)]),
				),
				/**
				 * Marks the word or words taken from a fixed point in a codex (typically the beginning of the second leaf) in order to provide a unique identifier for the item.
				 * @see https://music-encoding.org/guidelines/v5/elements/secFolio.html
				 */
				secFolio: v.optional(
					v.union([SecFolioSchema, v.array(SecFolioSchema)]),
				),
				/**
				 * Provides a description of the leaf or quire signatures found within a codex.
				 * @see https://music-encoding.org/guidelines/v5/elements/signatures.html
				 */
				signatures: v.optional(
					v.union([SignaturesSchema, v.array(SignaturesSchema)]),
				),
				/**
				 * Reflects the number of apparent sound channels in the playback of a recording (monaural, stereophonic, quadraphonic, etc.).
				 * @see https://music-encoding.org/guidelines/v5/elements/soundChan.html
				 */
				soundChan: v.optional(
					v.union([SoundChanSchema, v.array(SoundChanSchema)]),
				),
				/**
				 * The equalization system, noise reduction system, etc. used in making the recording ( e.g. , NAB, DBX, Dolby, etc.).
				 * @see https://music-encoding.org/guidelines/v5/elements/specRepro.html
				 */
				specRepro: v.optional(
					v.union([SpecReproSchema, v.array(SpecReproSchema)]),
				),
				/**
				 * Contains a word or phrase describing an official mark indicating ownership, genuineness, validity, etc.
				 * @see https://music-encoding.org/guidelines/v5/elements/stamp.html
				 */
				stamp: v.optional(v.union([StampSchema, v.array(StampSchema)])),
				/**
				 * Groups elements describing the physical support material of an item.
				 * @see https://music-encoding.org/guidelines/v5/elements/supportDesc.html
				 */
				supportDesc: v.optional(
					v.union([SupportDescSchema, v.array(SupportDescSchema)]),
				),
				/**
				 * Contains a transcription of the title page of a text.
				 * @see https://music-encoding.org/guidelines/v5/elements/titlePage.html
				 */
				titlePage: v.optional(
					v.union([TitlePageSchema, v.array(TitlePageSchema)]),
				),
				/**
				 * Number of physical/input tracks on a sound medium ( e.g. , eight track, twelve track).
				 * @see https://music-encoding.org/guidelines/v5/elements/trackConfig.html
				 */
				trackConfig: v.optional(
					v.union([TrackConfigSchema, v.array(TrackConfigSchema)]),
				),
				/**
				 * Contains a description of the typefaces or other aspects of the printing of a printed source.
				 * @see https://music-encoding.org/guidelines/v5/elements/typeDesc.html
				 */
				typeDesc: v.optional(
					v.union([TypeDescSchema, v.array(TypeDescSchema)]),
				),
				/**
				 * Contains a description of a watermark or similar device.
				 * @see https://music-encoding.org/guidelines/v5/elements/watermark.html
				 */
				watermark: v.optional(
					v.union([WatermarkSchema, v.array(WatermarkSchema)]),
				),
			}),
			ModelIncipLikeSchema,
		]),
	);

export type ModelPhysDescPartData = {
	accMat?: AccMatData | AccMatData[];
	addDesc?: AddDescData | AddDescData[];
	bindingDesc?: BindingDescData | BindingDescData[];
	captureMode?: CaptureModeData | CaptureModeData[];
	carrierForm?: CarrierFormData | CarrierFormData[];
	catchwords?: CatchwordsData | CatchwordsData[];
	colophon?: ColophonData | ColophonData[];
	condition?: ConditionData | ConditionData[];
	decoDesc?: DecoDescData | DecoDescData[];
	dimensions?: DimensionsData | DimensionsData[];
	explicit?: ExplicitData | ExplicitData[];
	extent?: ExtentData | ExtentData[];
	fileChar?: FileCharData | FileCharData[];
	foliaDesc?: FoliaDescData | FoliaDescData[];
	handList?: HandListData | HandListData[];
	heraldry?: HeraldryData | HeraldryData[];
	history?: HistoryData | HistoryData[];
	inscription?: InscriptionData | InscriptionData[];
	layoutDesc?: LayoutDescData | LayoutDescData[];
	perfDuration?: PerfDurationData | PerfDurationData[];
	physMedium?: PhysMediumData | PhysMediumData[];
	plateNum?: PlateNumData | PlateNumData[];
	playingSpeed?: PlayingSpeedData | PlayingSpeedData[];
	rubric?: RubricData | RubricData[];
	scoreFormat?: ScoreFormatData | ScoreFormatData[];
	scriptDesc?: ScriptDescData | ScriptDescData[];
	sealDesc?: SealDescData | SealDescData[];
	secFolio?: SecFolioData | SecFolioData[];
	signatures?: SignaturesData | SignaturesData[];
	soundChan?: SoundChanData | SoundChanData[];
	specRepro?: SpecReproData | SpecReproData[];
	stamp?: StampData | StampData[];
	supportDesc?: SupportDescData | SupportDescData[];
	titlePage?: TitlePageData | TitlePageData[];
	trackConfig?: TrackConfigData | TrackConfigData[];
	typeDesc?: TypeDescData | TypeDescData[];
	watermark?: WatermarkData | WatermarkData[];
} & ModelIncipLikeData;
