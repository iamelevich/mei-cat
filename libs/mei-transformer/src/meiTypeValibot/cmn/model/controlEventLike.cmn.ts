import * as v from "valibot";
import {
	type ArpegData,
	ArpegSchema,
	type AttaccaData,
	AttaccaSchema,
	type BeamSpanData,
	BeamSpanSchema,
	type BracketSpanData,
	BracketSpanSchema,
	type BreathData,
	BreathSchema,
	type FermataData,
	FermataSchema,
	type HairpinData,
	HairpinSchema,
	type HarpPedalData,
	HarpPedalSchema,
	type LvData,
	LvSchema,
	type OctaveData,
	OctaveSchema,
	type PedalData,
	PedalSchema,
	type RehData,
	RehSchema,
	type SlurData,
	SlurSchema,
	type TieData,
	TieSchema,
	type TupletSpanData,
	TupletSpanSchema,
} from "..";
import {
	type ModelOrnamentLikeCmnData,
	ModelOrnamentLikeCmnSchema,
} from "../../cmnOrnaments";

/**
 * Groups control events that appear in CMN.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.controlEventLike.cmn.html
 */
export const ModelControlEventLikeCmnSchema: v.GenericSchema<ModelControlEventLikeCmnData> =
	v.intersect([
		v.object({
			/**
			 * Indicates that the notes of a chord are to be performed successively rather than simultaneously, usually from lowest to highest. Sometimes called a &#34;roll&#34;.
			 * @see https://music-encoding.org/guidelines/v5/elements/arpeg.html
			 */
			arpeg: v.optional(
				v.union([
					v.lazy(() => ArpegSchema),
					v.array(v.lazy(() => ArpegSchema)),
				]),
			),
			/**
			 * An instruction to begin the next section or movement of a composition without pause.
			 * @see https://music-encoding.org/guidelines/v5/elements/attacca.html
			 */
			attacca: v.optional(
				v.union([
					v.lazy(() => AttaccaSchema),
					v.array(v.lazy(() => AttaccaSchema)),
				]),
			),
			/**
			 * Alternative element for explicitly encoding beams, particularly those which extend across bar lines.
			 * @see https://music-encoding.org/guidelines/v5/elements/beamSpan.html
			 */
			beamSpan: v.optional(
				v.union([
					v.lazy(() => BeamSpanSchema),
					v.array(v.lazy(() => BeamSpanSchema)),
				]),
			),
			/**
			 * Marks a sequence of notational events grouped by a bracket.
			 * @see https://music-encoding.org/guidelines/v5/elements/bracketSpan.html
			 */
			bracketSpan: v.optional(
				v.union([
					v.lazy(() => BracketSpanSchema),
					v.array(v.lazy(() => BracketSpanSchema)),
				]),
			),
			/**
			 * An indication of a point at which the performer on an instrument requiring breath (including the voice) may breathe.
			 * @see https://music-encoding.org/guidelines/v5/elements/breath.html
			 */
			breath: v.optional(
				v.union([
					v.lazy(() => BreathSchema),
					v.array(v.lazy(() => BreathSchema)),
				]),
			),
			/**
			 * An indication placed over a note or rest to indicate that it should be held longer than its written value. May also occur over a bar line to indicate the end of a phrase or section. Sometimes called a 'hold' or 'pause'.
			 * @see https://music-encoding.org/guidelines/v5/elements/fermata.html
			 */
			fermata: v.optional(
				v.union([
					v.lazy(() => FermataSchema),
					v.array(v.lazy(() => FermataSchema)),
				]),
			),
			/**
			 * Indicates continuous dynamics expressed on the score as wedge-shaped graphics, e.g. , < and &gt;.
			 * @see https://music-encoding.org/guidelines/v5/elements/hairpin.html
			 */
			hairpin: v.optional(
				v.union([
					v.lazy(() => HairpinSchema),
					v.array(v.lazy(() => HairpinSchema)),
				]),
			),
			/**
			 * Harp pedal diagram.
			 * @see https://music-encoding.org/guidelines/v5/elements/harpPedal.html
			 */
			harpPedal: v.optional(
				v.union([
					v.lazy(() => HarpPedalSchema),
					v.array(v.lazy(() => HarpPedalSchema)),
				]),
			),
			/**
			 * A &#34;tie-like&#34; indication that a note should ring beyond its written duration.
			 * @see https://music-encoding.org/guidelines/v5/elements/lv.html
			 */
			lv: v.optional(
				v.union([v.lazy(() => LvSchema), v.array(v.lazy(() => LvSchema))]),
			),
			/**
			 * An indication that a passage should be performed one or more octaves above or below its written pitch.
			 * @see https://music-encoding.org/guidelines/v5/elements/octave.html
			 */
			octave: v.optional(
				v.union([
					v.lazy(() => OctaveSchema),
					v.array(v.lazy(() => OctaveSchema)),
				]),
			),
			/**
			 * Piano pedal mark.
			 * @see https://music-encoding.org/guidelines/v5/elements/pedal.html
			 */
			pedal: v.optional(
				v.union([
					v.lazy(() => PedalSchema),
					v.array(v.lazy(() => PedalSchema)),
				]),
			),
			/**
			 * In an orchestral score and its corresponding parts, a mark indicating a convenient point from which to resume rehearsal after a break.
			 * @see https://music-encoding.org/guidelines/v5/elements/reh.html
			 */
			reh: v.optional(
				v.union([v.lazy(() => RehSchema), v.array(v.lazy(() => RehSchema))]),
			),
			/**
			 * Indication of 1) a &#34;unified melodic idea&#34; or 2) performance technique.
			 * @see https://music-encoding.org/guidelines/v5/elements/slur.html
			 */
			slur: v.optional(
				v.union([v.lazy(() => SlurSchema), v.array(v.lazy(() => SlurSchema))]),
			),
			/**
			 * An indication that two notes of the same pitch form a single note with their combined rhythmic values.
			 * @see https://music-encoding.org/guidelines/v5/elements/tie.html
			 */
			tie: v.optional(
				v.union([v.lazy(() => TieSchema), v.array(v.lazy(() => TieSchema))]),
			),
			/**
			 * Alternative element for encoding tuplets, especially useful for tuplets that extend across bar lines.
			 * @see https://music-encoding.org/guidelines/v5/elements/tupletSpan.html
			 */
			tupletSpan: v.optional(
				v.union([
					v.lazy(() => TupletSpanSchema),
					v.array(v.lazy(() => TupletSpanSchema)),
				]),
			),
		}),
		ModelOrnamentLikeCmnSchema,
	]);

export type ModelControlEventLikeCmnData = {
	arpeg?: ArpegData | ArpegData[];
	attacca?: AttaccaData | AttaccaData[];
	beamSpan?: BeamSpanData | BeamSpanData[];
	bracketSpan?: BracketSpanData | BracketSpanData[];
	breath?: BreathData | BreathData[];
	fermata?: FermataData | FermataData[];
	hairpin?: HairpinData | HairpinData[];
	harpPedal?: HarpPedalData | HarpPedalData[];
	lv?: LvData | LvData[];
	octave?: OctaveData | OctaveData[];
	pedal?: PedalData | PedalData[];
	reh?: RehData | RehData[];
	slur?: SlurData | SlurData[];
	tie?: TieData | TieData[];
	tupletSpan?: TupletSpanData | TupletSpanData[];
} & ModelOrnamentLikeCmnData;
