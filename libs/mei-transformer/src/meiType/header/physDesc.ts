import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";

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
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),
			// Zero or more model.pLike elements
			/**
			 * One or more text phrases that form a logical prose passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([Type.Ref("p"), Type.Array(Type.Ref("p"))])),
			// Zero or more model.physDescPart elements
			/**
			 * The physical condition of an item, particularly any variances between the physical make-up of the item and that of other copies of the same item.
			 * @see https://music-encoding.org/guidelines/v5/elements/condition.html
			 */
			condition: Type.Optional(
				Type.Union([Type.Ref("condition"), Type.Array(Type.Ref("condition"))]),
			),
			/**
			 * Information about the physical size of an entity; usually includes numerical data.
			 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
			 */
			dimensions: Type.Optional(
				Type.Union([
					Type.Ref("dimensions"),
					Type.Array(Type.Ref("dimensions")),
				]),
			),
			/**
			 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
			 */
			extent: Type.Optional(
				Type.Union([Type.Ref("extent"), Type.Array(Type.Ref("extent"))]),
			),
			/**
			 * Describes the order of folia and bifolia making up the text block of a manuscript or print.
			 * @see https://music-encoding.org/guidelines/v5/elements/foliaDesc.html
			 */
			foliaDesc: Type.Optional(
				Type.Union([Type.Ref("foliaDesc"), Type.Array(Type.Ref("foliaDesc"))]),
			),
			/**
			 * Container for one or more hand elements.
			 * @see https://music-encoding.org/guidelines/v5/elements/handList.html
			 */
			handList: Type.Optional(
				Type.Union([Type.Ref("handList"), Type.Array(Type.Ref("handList"))]),
			),
			/**
			 * An inscription added to an item, such as a bookplate, a note designating the item as a gift, and/or the author's signature.
			 * @see https://music-encoding.org/guidelines/v5/elements/inscription.html
			 */
			inscription: Type.Optional(
				Type.Union([
					Type.Ref("inscription"),
					Type.Array(Type.Ref("inscription")),
				]),
			),
			/**
			 * Records the physical materials used in the source, such as ink and paper.
			 * @see https://music-encoding.org/guidelines/v5/elements/physMedium.html
			 */
			physMedium: Type.Optional(
				Type.Union([
					Type.Ref("physMedium"),
					Type.Array(Type.Ref("physMedium")),
				]),
			),
			/**
			 * Designation assigned to a resource by a music publisher, usually printed at the bottom of each page, and sometimes appearing also on the title page.
			 * @see https://music-encoding.org/guidelines/v5/elements/plateNum.html
			 */
			plateNum: Type.Optional(
				Type.Union([Type.Ref("plateNum"), Type.Array(Type.Ref("plateNum"))]),
			),
			/**
			 * Playing speed for a sound recording is the speed at which the carrier must be operated to produce the sound intended.
			 * @see https://music-encoding.org/guidelines/v5/elements/playingSpeed.html
			 */
			playingSpeed: Type.Optional(
				Type.Union([
					Type.Ref("playingSpeed"),
					Type.Array(Type.Ref("playingSpeed")),
				]),
			),
			/**
			 * Describes the type of score used to represent a musical composition.
			 * @see https://music-encoding.org/guidelines/v5/elements/scoreFormat.html
			 */
			scoreFormat: Type.Optional(
				Type.Union([
					Type.Ref("scoreFormat"),
					Type.Array(Type.Ref("scoreFormat")),
				]),
			),
			/**
			 * Reflects the number of apparent sound channels in the playback of a recording.
			 * @see https://music-encoding.org/guidelines/v5/elements/soundChan.html
			 */
			soundChan: Type.Optional(
				Type.Union([Type.Ref("soundChan"), Type.Array(Type.Ref("soundChan"))]),
			),
			/**
			 * The equalization system, noise reduction system, etc. used in making the recording.
			 * @see https://music-encoding.org/guidelines/v5/elements/specRepro.html
			 */
			specRepro: Type.Optional(
				Type.Union([Type.Ref("specRepro"), Type.Array(Type.Ref("specRepro"))]),
			),
			/**
			 * Number of physical/input tracks on a sound medium.
			 * @see https://music-encoding.org/guidelines/v5/elements/trackConfig.html
			 */
			trackConfig: Type.Optional(
				Type.Union([
					Type.Ref("trackConfig"),
					Type.Array(Type.Ref("trackConfig")),
				]),
			),
			/**
			 * Contains a description of a watermark or similar device.
			 * @see https://music-encoding.org/guidelines/v5/elements/watermark.html
			 */
			watermark: Type.Optional(
				Type.Union([Type.Ref("watermark"), Type.Array(Type.Ref("watermark"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
