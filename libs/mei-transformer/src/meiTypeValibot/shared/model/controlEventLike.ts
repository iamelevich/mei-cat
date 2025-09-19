import * as v from "valibot";
import { type BendData, BendSchema } from "../../cmn/element/bend";
import { type GlissData, GlissSchema } from "../../cmn/element/gliss";
import {
	type RepeatMarkData,
	RepeatMarkSchema,
} from "../../cmn/element/repeatMark";
import { type SpData, SpSchema } from "../../drama/element/sp";
import {
	type ModelStageDirLikeData,
	ModelStageDirLikeSchema,
} from "../../drama/model/stageDirLike";
import { type CpMarkData, CpMarkSchema } from "../../edittrans/element/cpMark";
import {
	type MetaMarkData,
	MetaMarkSchema,
} from "../../edittrans/element/metaMark";
import {
	type ModelFingeringLikeData,
	ModelFingeringLikeSchema,
} from "../../fingering/model/fingeringLike";
import {
	type ModelControlEventLikeHarmonyData,
	ModelControlEventLikeHarmonySchema,
} from "../../harmony/model/controlEventLike.harmony";
import { type CaesuraData, CaesuraSchema } from "../element/caesura";
import { type DirData, DirSchema } from "../element/dir";
import { type DynamData, DynamSchema } from "../element/dynam";
import { type OrnamData, OrnamSchema } from "../element/ornam";
import { type PhraseData, PhraseSchema } from "../element/phrase";
import { type TempoData, TempoSchema } from "../element/tempo";

/**
 * Groups elements, such as dynamics, ties, phrase marks, pedal marks, etc., which depend upon other events, such as notes or rests, for their existence.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.controlEventLike.html
 */
export const ModelControlEventLikeSchema: v.GenericSchema<ModelControlEventLikeData> =
	v.lazy(() =>
		v.intersect([
			v.object({
				/**
				 * A variation in pitch (often micro-tonal) upwards or downwards during the course of a note.
				 * @see https://music-encoding.org/guidelines/v5/elements/bend.html
				 */
				bend: v.optional(v.union([BendSchema, v.array(BendSchema)])),
				/**
				 * Break, pause, or interruption in the normal tempo of a composition. Typically indicated by &#34;railroad tracks&#34;, i.e. , two diagonal slashes.
				 * @see https://music-encoding.org/guidelines/v5/elements/caesura.html
				 */
				caesura: v.optional(v.union([CaesuraSchema, v.array(CaesuraSchema)])),
				/**
				 * A verbal or graphical indication to copy musical material written elsewhere.
				 * @see https://music-encoding.org/guidelines/v5/elements/cpMark.html
				 */
				cpMark: v.optional(v.union([CpMarkSchema, v.array(CpMarkSchema)])),
				/**
				 * An instruction expressed as a combination of text and symbols, typically above, below, or between staves, but not on the staff — that is not encoded elsewhere in more specific elements, like tempo , dynam or repeatMark .
				 * @see https://music-encoding.org/guidelines/v5/elements/dir.html
				 */
				dir: v.optional(v.union([DirSchema, v.array(DirSchema)])),
				/**
				 * Indication of the volume of a note, phrase, or section of music.
				 * @see https://music-encoding.org/guidelines/v5/elements/dynam.html
				 */
				dynam: v.optional(v.union([DynamSchema, v.array(DynamSchema)])),
				/**
				 * A continuous or sliding movement from one pitch to another, usually indicated by a straight or wavy line.
				 * @see https://music-encoding.org/guidelines/v5/elements/gliss.html
				 */
				gliss: v.optional(v.union([GlissSchema, v.array(GlissSchema)])),
				/**
				 * A graphical or textual statement with additional / explanatory information about the musical text. The textual consequences of this intervention are encoded independently via other means; that is, with elements such as add , del , etc.
				 * @see https://music-encoding.org/guidelines/v5/elements/metaMark.html
				 */
				metaMark: v.optional(
					v.union([MetaMarkSchema, v.array(MetaMarkSchema)]),
				),
				/**
				 * An element indicating an ornament that is not a mordent, turn, or trill.
				 * @see https://music-encoding.org/guidelines/v5/elements/ornam.html
				 */
				ornam: v.optional(v.union([OrnamSchema, v.array(OrnamSchema)])),
				/**
				 * Indication of 1) a &#34;unified melodic idea&#34; or 2) performance technique.
				 * @see https://music-encoding.org/guidelines/v5/elements/phrase.html
				 */
				phrase: v.optional(v.union([PhraseSchema, v.array(PhraseSchema)])),
				/**
				 * An instruction expressed as a combination of text and symbols – segno and coda – typically above, below, or between staves, but not on the staff.
				 * @see https://music-encoding.org/guidelines/v5/elements/repeatMark.html
				 */
				repeatMark: v.optional(
					v.union([RepeatMarkSchema, v.array(RepeatMarkSchema)]),
				),
				/**
				 * Contains an individual speech in a performance text.
				 * @see https://music-encoding.org/guidelines/v5/elements/sp.html
				 */
				sp: v.optional(v.union([SpSchema, v.array(SpSchema)])),
				/**
				 * Text and symbols descriptive of tempo, mood, or style, e.g. , &#34;allarg.&#34;, &#34;a tempo&#34;, &#34;cantabile&#34;, &#34;Moderato&#34;, &#34;♩=60&#34;, &#34;Moderato ♩ =60&#34;).
				 * @see https://music-encoding.org/guidelines/v5/elements/tempo.html
				 */
				tempo: v.optional(v.union([TempoSchema, v.array(TempoSchema)])),
			}),
			ModelControlEventLikeHarmonySchema,
			ModelFingeringLikeSchema,
			ModelStageDirLikeSchema,
		]),
	);

export type ModelControlEventLikeData = {
	bend?: BendData | BendData[];
	caesura?: CaesuraData | CaesuraData[];
	cpMark?: CpMarkData | CpMarkData[];
	dir?: DirData | DirData[];
	dynam?: DynamData | DynamData[];
	gliss?: GlissData | GlissData[];
	metaMark?: MetaMarkData | MetaMarkData[];
	ornam?: OrnamData | OrnamData[];
	phrase?: PhraseData | PhraseData[];
	repeatMark?: RepeatMarkData | RepeatMarkData[];
	sp?: SpData | SpData[];
	tempo?: TempoData | TempoData[];
} & ModelControlEventLikeHarmonyData &
	ModelFingeringLikeData &
	ModelStageDirLikeData;
