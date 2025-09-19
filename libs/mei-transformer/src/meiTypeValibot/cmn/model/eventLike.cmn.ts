import * as v from "valibot";
import { type BeamData, BeamSchema } from "../element/beam";
import { type BeatRptData, BeatRptSchema } from "../element/beatRpt";
import { type BTremData, BTremSchema } from "../element/bTrem";
import { type FTremData, FTremSchema } from "../element/fTrem";
import { type GraceGrpData, GraceGrpSchema } from "../element/graceGrp";
import { type HalfmRptData, HalfmRptSchema } from "../element/halfmRpt";
import { type TupletData, TupletSchema } from "../element/tuplet";

/**
 * Groups events that appear in CMN.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.eventLike.cmn.html
 */
export const ModelEventLikeCmnSchema: v.GenericSchema<ModelEventLikeCmnData> =
	v.lazy(() =>
		v.object({
			/**
			 * A rapid alternation on a single pitch or chord.
			 * @see https://music-encoding.org/guidelines/v5/elements/bTrem.html
			 */
			bTrem: v.optional(v.union([v.array(BTremSchema), BTremSchema])),
			/**
			 * A container for a series of explicitly beamed events that begins and ends entirely within a measure.
			 * @see https://music-encoding.org/guidelines/v5/elements/beam.html
			 */
			beam: v.optional(v.union([v.array(BeamSchema), BeamSchema])),
			/**
			 * An indication that material on a preceding beat should be repeated.
			 * @see https://music-encoding.org/guidelines/v5/elements/beatRpt.html
			 */
			beatRpt: v.optional(v.union([v.array(BeatRptSchema), BeatRptSchema])),
			/**
			 * A rapid alternation between a pair of notes (or chords or perhaps between a note and a chord) that are (usually) farther apart than a major second.
			 * @see https://music-encoding.org/guidelines/v5/elements/fTrem.html
			 */
			fTrem: v.optional(v.union([v.array(FTremSchema), FTremSchema])),
			/**
			 * A container for a sequence of grace notes.
			 * @see https://music-encoding.org/guidelines/v5/elements/graceGrp.html
			 */
			graceGrp: v.optional(v.union([v.array(GraceGrpSchema), GraceGrpSchema])),
			/**
			 * A half-measure repeat in any meter.
			 * @see https://music-encoding.org/guidelines/v5/elements/halfmRpt.html
			 */
			halfmRpt: v.optional(v.union([v.array(HalfmRptSchema), HalfmRptSchema])),
			/**
			 * A group of notes with &#34;irregular&#34; (sometimes called &#34;irrational&#34;) rhythmic values, for example, three notes in the time normally occupied by two or nine in the time of five.
			 * @see https://music-encoding.org/guidelines/v5/elements/tuplet.html
			 */
			tuplet: v.optional(v.union([v.array(TupletSchema), TupletSchema])),
		}),
	);

export type ModelEventLikeCmnData = {
	bTrem?: BTremData | BTremData[];
	beam?: BeamData | BeamData[];
	beatRpt?: BeatRptData | BeatRptData[];
	fTrem?: FTremData | FTremData[];
	graceGrp?: GraceGrpData | GraceGrpData[];
	halfmRpt?: HalfmRptData | HalfmRptData[];
	tuplet?: TupletData | TupletData[];
};
