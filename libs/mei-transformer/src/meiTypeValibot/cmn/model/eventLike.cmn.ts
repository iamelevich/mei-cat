import * as v from "valibot";
import { type BeamData, BeamSchema } from "../beam";
import { type BeatRptData, BeatRptSchema } from "../beatRpt";
import { type BTremData, BTremSchema } from "../bTrem";
import { type FTremData, FTremSchema } from "../fTrem";
import { type GraceGrpData, GraceGrpSchema } from "../graceGrp";
import { type HalfmRptData, HalfmRptSchema } from "../halfmRpt";
import { type TupletData, TupletSchema } from "../tuplet";

/**
 * Groups events that appear in CMN.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.eventLike.cmn.html
 */
export const EventLikeCmnSchema: v.GenericSchema<EventLikeCmnData> = v.object({
	/**
	 * A rapid alternation on a single pitch or chord.
	 * @see https://music-encoding.org/guidelines/v5/elements/bTrem.html
	 */
	bTrem: v.optional(
		v.union([v.lazy(() => BTremSchema), v.array(v.lazy(() => BTremSchema))]),
	),
	/**
	 * A container for a series of explicitly beamed events that begins and ends entirely within a measure.
	 * @see https://music-encoding.org/guidelines/v5/elements/beam.html
	 */
	beam: v.optional(
		v.union([v.lazy(() => BeamSchema), v.array(v.lazy(() => BeamSchema))]),
	),
	/**
	 * An indication that material on a preceding beat should be repeated.
	 * @see https://music-encoding.org/guidelines/v5/elements/beatRpt.html
	 */
	beatRpt: v.optional(
		v.union([
			v.lazy(() => BeatRptSchema),
			v.array(v.lazy(() => BeatRptSchema)),
		]),
	),
	/**
	 * A rapid alternation between a pair of notes (or chords or perhaps between a note and a chord) that are (usually) farther apart than a major second.
	 * @see https://music-encoding.org/guidelines/v5/elements/fTrem.html
	 */
	fTrem: v.optional(
		v.union([v.lazy(() => FTremSchema), v.array(v.lazy(() => FTremSchema))]),
	),
	/**
	 * A container for a sequence of grace notes.
	 * @see https://music-encoding.org/guidelines/v5/elements/graceGrp.html
	 */
	graceGrp: v.optional(
		v.union([
			v.lazy(() => GraceGrpSchema),
			v.array(v.lazy(() => GraceGrpSchema)),
		]),
	),
	/**
	 * A half-measure repeat in any meter.
	 * @see https://music-encoding.org/guidelines/v5/elements/halfmRpt.html
	 */
	halfmRpt: v.optional(
		v.union([
			v.lazy(() => HalfmRptSchema),
			v.array(v.lazy(() => HalfmRptSchema)),
		]),
	),
	/**
	 * A group of notes with "irregular" (sometimes called "irrational") rhythmic values, for example, three notes in the time normally occupied by two or nine in the time of five.
	 * @see https://music-encoding.org/guidelines/v5/elements/tuplet.html
	 */
	tuplet: v.optional(
		v.union([v.lazy(() => TupletSchema), v.array(v.lazy(() => TupletSchema))]),
	),
});

export type EventLikeCmnData = {
	bTrem?: BTremData | BTremData[];
	beam?: BeamData | BeamData[];
	beatRpt?: BeatRptData | BeatRptData[];
	fTrem?: FTremData | FTremData[];
	graceGrp?: GraceGrpData | GraceGrpData[];
	halfmRpt?: HalfmRptData | HalfmRptData[];
	tuplet?: TupletData | TupletData[];
};
