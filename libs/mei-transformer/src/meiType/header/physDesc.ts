import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { DimensionsSchema } from "../shared/dimensions";
import { ExtentSchema } from "../shared/extent";
import { HeadSchema } from "../shared/head";
import { PSchema } from "../shared/p";
import { ConditionSchema } from "./condition";
import { FoliaDescSchema } from "./foliaDesc";
import { HandListSchema } from "./handList";
import { InscriptionSchema } from "./inscription";
import { PhysMediumSchema } from "./physMedium";
import { PlateNumSchema } from "./plateNum";
import { PlayingSpeedSchema } from "./playingSpeed";
import { ScoreFormatSchema } from "./scoreFormat";
import { SoundChanSchema } from "./soundChan";
import { SpecReproSchema } from "./specRepro";
import { TrackConfigSchema } from "./trackConfig";
import { WatermarkSchema } from "./watermark";

/**
 * Container for information about the appearance, construction, or handling of physical materials, such as their dimension, quantity, color, style, and technique of creation.
 * @see https://music-encoding.org/guidelines/v5/elements/physDesc.html
 */
export const PhysDescSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	Type.Object(
		{
			// Zero or more model.headLike elements
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
			// Zero or more model.pLike elements
			/**
			 * One or more text phrases that form a logical prose passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([PSchema, Type.Array(PSchema)])),
			// Zero or more model.physDescPart elements
			/**
			 * The physical condition of an item, particularly any variances between the physical make-up of the item and that of other copies of the same item.
			 * @see https://music-encoding.org/guidelines/v5/elements/condition.html
			 */
			condition: Type.Optional(
				Type.Union([ConditionSchema, Type.Array(ConditionSchema)]),
			),
			/**
			 * Information about the physical size of an entity; usually includes numerical data.
			 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
			 */
			dimensions: Type.Optional(
				Type.Union([DimensionsSchema, Type.Array(DimensionsSchema)]),
			),
			/**
			 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
			 */
			extent: Type.Optional(
				Type.Union([ExtentSchema, Type.Array(ExtentSchema)]),
			),
			/**
			 * Describes the order of folia and bifolia making up the text block of a manuscript or print.
			 * @see https://music-encoding.org/guidelines/v5/elements/foliaDesc.html
			 */
			foliaDesc: Type.Optional(
				Type.Union([FoliaDescSchema, Type.Array(FoliaDescSchema)]),
			),
			/**
			 * Container for one or more hand elements.
			 * @see https://music-encoding.org/guidelines/v5/elements/handList.html
			 */
			handList: Type.Optional(
				Type.Union([HandListSchema, Type.Array(HandListSchema)]),
			),
			/**
			 * An inscription added to an item, such as a bookplate, a note designating the item as a gift, and/or the author's signature.
			 * @see https://music-encoding.org/guidelines/v5/elements/inscription.html
			 */
			inscription: Type.Optional(
				Type.Union([InscriptionSchema, Type.Array(InscriptionSchema)]),
			),
			/**
			 * Records the physical materials used in the source, such as ink and paper.
			 * @see https://music-encoding.org/guidelines/v5/elements/physMedium.html
			 */
			physMedium: Type.Optional(
				Type.Union([PhysMediumSchema, Type.Array(PhysMediumSchema)]),
			),
			/**
			 * Designation assigned to a resource by a music publisher, usually printed at the bottom of each page, and sometimes appearing also on the title page.
			 * @see https://music-encoding.org/guidelines/v5/elements/plateNum.html
			 */
			plateNum: Type.Optional(
				Type.Union([PlateNumSchema, Type.Array(PlateNumSchema)]),
			),
			/**
			 * Playing speed for a sound recording is the speed at which the carrier must be operated to produce the sound intended.
			 * @see https://music-encoding.org/guidelines/v5/elements/playingSpeed.html
			 */
			playingSpeed: Type.Optional(
				Type.Union([PlayingSpeedSchema, Type.Array(PlayingSpeedSchema)]),
			),
			/**
			 * Describes the type of score used to represent a musical composition.
			 * @see https://music-encoding.org/guidelines/v5/elements/scoreFormat.html
			 */
			scoreFormat: Type.Optional(
				Type.Union([ScoreFormatSchema, Type.Array(ScoreFormatSchema)]),
			),
			/**
			 * Reflects the number of apparent sound channels in the playback of a recording.
			 * @see https://music-encoding.org/guidelines/v5/elements/soundChan.html
			 */
			soundChan: Type.Optional(
				Type.Union([SoundChanSchema, Type.Array(SoundChanSchema)]),
			),
			/**
			 * The equalization system, noise reduction system, etc. used in making the recording.
			 * @see https://music-encoding.org/guidelines/v5/elements/specRepro.html
			 */
			specRepro: Type.Optional(
				Type.Union([SpecReproSchema, Type.Array(SpecReproSchema)]),
			),
			/**
			 * Number of physical/input tracks on a sound medium.
			 * @see https://music-encoding.org/guidelines/v5/elements/trackConfig.html
			 */
			trackConfig: Type.Optional(
				Type.Union([TrackConfigSchema, Type.Array(TrackConfigSchema)]),
			),
			/**
			 * Contains a description of a watermark or similar device.
			 * @see https://music-encoding.org/guidelines/v5/elements/watermark.html
			 */
			watermark: Type.Optional(
				Type.Union([WatermarkSchema, Type.Array(WatermarkSchema)]),
			),
		},
		{ additionalProperties: false },
	),
]);

export type PhysDesc = Static<typeof PhysDescSchema>;
