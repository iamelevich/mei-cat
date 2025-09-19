import * as v from "valibot";
import {
	type AccMatData,
	AccMatSchema,
	type AddDescData,
	AddDescSchema,
	type BindingDescData,
	BindingDescSchema,
	type CatchwordsData,
	CatchwordsSchema,
	type ColophonData,
	ColophonSchema,
	type DecoDescData,
	DecoDescSchema,
	type ExplicitData,
	ExplicitSchema,
	type HeraldryData,
	HeraldrySchema,
	type LayoutDescData,
	LayoutDescSchema,
	type RubricData,
	RubricSchema,
	type ScriptDescData,
	ScriptDescSchema,
	type SealDescData,
	SealDescSchema,
	type SecFolioData,
	SecFolioSchema,
	type SignaturesData,
	SignaturesSchema,
	type StampData,
	StampSchema,
	type SupportDescData,
	SupportDescSchema,
	type TypeDescData,
	TypeDescSchema,
} from "../../msDesc";
import {
	type CaptureModeData,
	CaptureModeSchema,
	type CarrierFormData,
	CarrierFormSchema,
	type ConditionData,
	ConditionSchema,
	type FileCharData,
	FileCharSchema,
	type FoliaDescData,
	FoliaDescSchema,
	type HandListData,
	HandListSchema,
	type HistoryData,
	HistorySchema,
	type InscriptionData,
	InscriptionSchema,
	type PerfDurationData,
	PerfDurationSchema,
	type PhysMediumData,
	PhysMediumSchema,
	type PlateNumData,
	PlateNumSchema,
	type PlayingSpeedData,
	PlayingSpeedSchema,
	type ScoreFormatData,
	ScoreFormatSchema,
	type SoundChanData,
	SoundChanSchema,
	type SpecReproData,
	SpecReproSchema,
	type TrackConfigData,
	TrackConfigSchema,
	type WatermarkData,
	WatermarkSchema,
} from "..";
import {
	type DimensionsData,
	DimensionsSchema,
	type ExtentData,
	ExtentSchema,
	type TitlePageData,
	TitlePageSchema,
	type ModelIncipLikeData,
	ModelIncipLikeSchema,
} from "../../shared";

/**
 * Groups elements that may appear as part of the physical description of a bibliographic item.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.physDescPart.html
 */
export const ModelPhysDescPartSchema: v.GenericSchema<ModelPhysDescPartData> =
	v.intersect([
		v.object({
			/**
			 * Holds a description of any additional material bound with an item, such as non-contemporaneous documents or fragments.
			 * @see https://music-encoding.org/guidelines/v5/elements/accMat.html
			 */
			accMat: v.optional(
				v.union([
					v.lazy(() => AccMatSchema),
					v.array(v.lazy(() => AccMatSchema)),
				]),
			),
			/**
			 * Provides a description of significant additions found within an item, such as marginalia or other annotations.
			 * @see https://music-encoding.org/guidelines/v5/elements/addDesc.html
			 */
			addDesc: v.optional(
				v.union([
					v.lazy(() => AddDescSchema),
					v.array(v.lazy(() => AddDescSchema)),
				]),
			),
			/**
			 * Describes the present and former bindings of an item.
			 * @see https://music-encoding.org/guidelines/v5/elements/bindingDesc.html
			 */
			bindingDesc: v.optional(
				v.union([
					v.lazy(() => BindingDescSchema),
					v.array(v.lazy(() => BindingDescSchema)),
				]),
			),
			/**
			 * The means used to record notation, sound, or images in the production of a source/manifestation ( e.g. , analogue, acoustic, electric, digital, optical etc.).
			 * @see https://music-encoding.org/guidelines/v5/elements/captureMode.html
			 */
			captureMode: v.optional(
				v.union([
					v.lazy(() => CaptureModeSchema),
					v.array(v.lazy(() => CaptureModeSchema)),
				]),
			),
			/**
			 * The specific class of material to which the physical carrier of the source/manifestation belongs ( e.g. , sound cassette, videodisc, microfilm cartridge, transparency, etc.). The carrier for a manifestation comprising multiple physical components may include more than one form ( e.g. , a filmstrip with an accompanying booklet, a separate sound disc carrying the sound track for a film, etc.).
			 * @see https://music-encoding.org/guidelines/v5/elements/carrierForm.html
			 */
			carrierForm: v.optional(
				v.union([
					v.lazy(() => CarrierFormSchema),
					v.array(v.lazy(() => CarrierFormSchema)),
				]),
			),
			/**
			 * Describes the system used to ensure correct ordering of the quires making up an item, typically by means of annotations at the foot of the page.
			 * @see https://music-encoding.org/guidelines/v5/elements/catchwords.html
			 */
			catchwords: v.optional(
				v.union([
					v.lazy(() => CatchwordsSchema),
					v.array(v.lazy(() => CatchwordsSchema)),
				]),
			),
			/**
			 * Contains a statement providing information regarding the date, place, agency, or reason for production of the item.
			 * @see https://music-encoding.org/guidelines/v5/elements/colophon.html
			 */
			colophon: v.optional(
				v.union([
					v.lazy(() => ColophonSchema),
					v.array(v.lazy(() => ColophonSchema)),
				]),
			),
			/**
			 * The physical condition of an item, particularly any variances between the physical make-up of the item and that of other copies of the same item ( e.g. , missing pages or plates, brittleness, faded images, etc.).
			 * @see https://music-encoding.org/guidelines/v5/elements/condition.html
			 */
			condition: v.optional(
				v.union([
					v.lazy(() => ConditionSchema),
					v.array(v.lazy(() => ConditionSchema)),
				]),
			),
			/**
			 * Contains a description of the decoration of an item.
			 * @see https://music-encoding.org/guidelines/v5/elements/decoDesc.html
			 */
			decoDesc: v.optional(
				v.union([
					v.lazy(() => DecoDescSchema),
					v.array(v.lazy(() => DecoDescSchema)),
				]),
			),
			/**
			 * Information about the physical size of an entity; usually includes numerical data.
			 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
			 */
			dimensions: v.optional(
				v.union([
					v.lazy(() => DimensionsSchema),
					v.array(v.lazy(() => DimensionsSchema)),
				]),
			),
			/**
			 * Contains the explicit of a manuscript item; that is, the closing words of the text proper, exclusive of any rubric or colophon which might follow it.
			 * @see https://music-encoding.org/guidelines/v5/elements/explicit.html
			 */
			explicit: v.optional(
				v.union([
					v.lazy(() => ExplicitSchema),
					v.array(v.lazy(() => ExplicitSchema)),
				]),
			),
			/**
			 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
			 */
			extent: v.optional(
				v.union([
					v.lazy(() => ExtentSchema),
					v.array(v.lazy(() => ExtentSchema)),
				]),
			),
			/**
			 * Standards or schemes used to encode the file ( e.g. , ASCII, SGML, etc.), physical characteristics of the file ( e.g. , recording density, parity, blocking, etc.), and other characteristics that have a bearing on how the file can be processed.
			 * @see https://music-encoding.org/guidelines/v5/elements/fileChar.html
			 */
			fileChar: v.optional(
				v.union([
					v.lazy(() => FileCharSchema),
					v.array(v.lazy(() => FileCharSchema)),
				]),
			),
			/**
			 * Describes the order of folia and bifolia making up the text block of a manuscript or print.
			 * @see https://music-encoding.org/guidelines/v5/elements/foliaDesc.html
			 */
			foliaDesc: v.optional(
				v.union([
					v.lazy(() => FoliaDescSchema),
					v.array(v.lazy(() => FoliaDescSchema)),
				]),
			),
			/**
			 * Container for one or more hand elements.
			 * @see https://music-encoding.org/guidelines/v5/elements/handList.html
			 */
			handList: v.optional(
				v.union([
					v.lazy(() => HandListSchema),
					v.array(v.lazy(() => HandListSchema)),
				]),
			),
			/**
			 * Contains a heraldic formula or phrase, typically found as part of a blazon, coat of arms, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/heraldry.html
			 */
			heraldry: v.optional(
				v.union([
					v.lazy(() => HeraldrySchema),
					v.array(v.lazy(() => HeraldrySchema)),
				]),
			),
			/**
			 * Provides a container for information about the history of a resource other than the circumstances of its creation.
			 * @see https://music-encoding.org/guidelines/v5/elements/history.html
			 */
			history: v.optional(
				v.union([
					v.lazy(() => HistorySchema),
					v.array(v.lazy(() => HistorySchema)),
				]),
			),
			/**
			 * An inscription added to an item, such as a bookplate, a note designating the item as a gift, and/or the author’s signature.
			 * @see https://music-encoding.org/guidelines/v5/elements/inscription.html
			 */
			inscription: v.optional(
				v.union([
					v.lazy(() => InscriptionSchema),
					v.array(v.lazy(() => InscriptionSchema)),
				]),
			),
			/**
			 * Collects layout descriptions.
			 * @see https://music-encoding.org/guidelines/v5/elements/layoutDesc.html
			 */
			layoutDesc: v.optional(
				v.union([
					v.lazy(() => LayoutDescSchema),
					v.array(v.lazy(() => LayoutDescSchema)),
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
			 * Records the physical materials used in the source, such as ink and paper.
			 * @see https://music-encoding.org/guidelines/v5/elements/physMedium.html
			 */
			physMedium: v.optional(
				v.union([
					v.lazy(() => PhysMediumSchema),
					v.array(v.lazy(() => PhysMediumSchema)),
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
			 * Playing speed for a sound recording is the speed at which the carrier must be operated to produce the sound intended ( e.g. , 33 1/3 rpm, 19 cm/s, etc.).
			 * @see https://music-encoding.org/guidelines/v5/elements/playingSpeed.html
			 */
			playingSpeed: v.optional(
				v.union([
					v.lazy(() => PlayingSpeedSchema),
					v.array(v.lazy(() => PlayingSpeedSchema)),
				]),
			),
			/**
			 * Contains a string of words through which a manuscript signals the beginning or end of a text division, often with an assertion as to its author and title, which is in some way set off from the text itself, usually in red ink, or by use of different size or type of script, or some other such visual device.
			 * @see https://music-encoding.org/guidelines/v5/elements/rubric.html
			 */
			rubric: v.optional(
				v.union([
					v.lazy(() => RubricSchema),
					v.array(v.lazy(() => RubricSchema)),
				]),
			),
			/**
			 * Describes the type of score used to represent a musical composition ( e.g. , short score, full score, condensed score, close score, etc.).
			 * @see https://music-encoding.org/guidelines/v5/elements/scoreFormat.html
			 */
			scoreFormat: v.optional(
				v.union([
					v.lazy(() => ScoreFormatSchema),
					v.array(v.lazy(() => ScoreFormatSchema)),
				]),
			),
			/**
			 * Contains a description of the letters or characters used in an autographic item.
			 * @see https://music-encoding.org/guidelines/v5/elements/scriptDesc.html
			 */
			scriptDesc: v.optional(
				v.union([
					v.lazy(() => ScriptDescSchema),
					v.array(v.lazy(() => ScriptDescSchema)),
				]),
			),
			/**
			 * Describes the seals or similar external attachments applied to an item.
			 * @see https://music-encoding.org/guidelines/v5/elements/sealDesc.html
			 */
			sealDesc: v.optional(
				v.union([
					v.lazy(() => SealDescSchema),
					v.array(v.lazy(() => SealDescSchema)),
				]),
			),
			/**
			 * Marks the word or words taken from a fixed point in a codex (typically the beginning of the second leaf) in order to provide a unique identifier for the item.
			 * @see https://music-encoding.org/guidelines/v5/elements/secFolio.html
			 */
			secFolio: v.optional(
				v.union([
					v.lazy(() => SecFolioSchema),
					v.array(v.lazy(() => SecFolioSchema)),
				]),
			),
			/**
			 * Provides a description of the leaf or quire signatures found within a codex.
			 * @see https://music-encoding.org/guidelines/v5/elements/signatures.html
			 */
			signatures: v.optional(
				v.union([
					v.lazy(() => SignaturesSchema),
					v.array(v.lazy(() => SignaturesSchema)),
				]),
			),
			/**
			 * Reflects the number of apparent sound channels in the playback of a recording (monaural, stereophonic, quadraphonic, etc.).
			 * @see https://music-encoding.org/guidelines/v5/elements/soundChan.html
			 */
			soundChan: v.optional(
				v.union([
					v.lazy(() => SoundChanSchema),
					v.array(v.lazy(() => SoundChanSchema)),
				]),
			),
			/**
			 * The equalization system, noise reduction system, etc. used in making the recording ( e.g. , NAB, DBX, Dolby, etc.).
			 * @see https://music-encoding.org/guidelines/v5/elements/specRepro.html
			 */
			specRepro: v.optional(
				v.union([
					v.lazy(() => SpecReproSchema),
					v.array(v.lazy(() => SpecReproSchema)),
				]),
			),
			/**
			 * Contains a word or phrase describing an official mark indicating ownership, genuineness, validity, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/stamp.html
			 */
			stamp: v.optional(
				v.union([
					v.lazy(() => StampSchema),
					v.array(v.lazy(() => StampSchema)),
				]),
			),
			/**
			 * Groups elements describing the physical support material of an item.
			 * @see https://music-encoding.org/guidelines/v5/elements/supportDesc.html
			 */
			supportDesc: v.optional(
				v.union([
					v.lazy(() => SupportDescSchema),
					v.array(v.lazy(() => SupportDescSchema)),
				]),
			),
			/**
			 * Contains a transcription of the title page of a text.
			 * @see https://music-encoding.org/guidelines/v5/elements/titlePage.html
			 */
			titlePage: v.optional(
				v.union([
					v.lazy(() => TitlePageSchema),
					v.array(v.lazy(() => TitlePageSchema)),
				]),
			),
			/**
			 * Number of physical/input tracks on a sound medium ( e.g. , eight track, twelve track).
			 * @see https://music-encoding.org/guidelines/v5/elements/trackConfig.html
			 */
			trackConfig: v.optional(
				v.union([
					v.lazy(() => TrackConfigSchema),
					v.array(v.lazy(() => TrackConfigSchema)),
				]),
			),
			/**
			 * Contains a description of the typefaces or other aspects of the printing of a printed source.
			 * @see https://music-encoding.org/guidelines/v5/elements/typeDesc.html
			 */
			typeDesc: v.optional(
				v.union([
					v.lazy(() => TypeDescSchema),
					v.array(v.lazy(() => TypeDescSchema)),
				]),
			),
			/**
			 * Contains a description of a watermark or similar device.
			 * @see https://music-encoding.org/guidelines/v5/elements/watermark.html
			 */
			watermark: v.optional(
				v.union([
					v.lazy(() => WatermarkSchema),
					v.array(v.lazy(() => WatermarkSchema)),
				]),
			),
		}),
		ModelIncipLikeSchema,
	]);

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
