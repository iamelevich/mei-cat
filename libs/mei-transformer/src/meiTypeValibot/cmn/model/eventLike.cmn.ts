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
			bTrem: v.optional(v.union([BTremSchema, v.array(BTremSchema)])),
			/**
			 * A container for a series of explicitly beamed events that begins and ends entirely within a measure.
			 * @see https://music-encoding.org/guidelines/v5/elements/beam.html
			 */
			beam: v.optional(v.union([BeamSchema, v.array(BeamSchema)])),
			/**
			 * An indication that material on a preceding beat should be repeated.
			 * @see https://music-encoding.org/guidelines/v5/elements/beatRpt.html
			 */
			beatRpt: v.optional(v.union([BeatRptSchema, v.array(BeatRptSchema)])),
			/**
			 * A rapid alternation between a pair of notes (or chords or perhaps between a note and a chord) that are (usually) farther apart than a major second.
			 * @see https://music-encoding.org/guidelines/v5/elements/fTrem.html
			 */
			fTrem: v.optional(v.union([FTremSchema, v.array(FTremSchema)])),
			/**
			 * A container for a sequence of grace notes.
			 * @see https://music-encoding.org/guidelines/v5/elements/graceGrp.html
			 */
			graceGrp: v.optional(v.union([GraceGrpSchema, v.array(GraceGrpSchema)])),
			/**
			 * A half-measure repeat in any meter.
			 * @see https://music-encoding.org/guidelines/v5/elements/halfmRpt.html
			 */
			halfmRpt: v.optional(v.union([HalfmRptSchema, v.array(HalfmRptSchema)])),
			/**
			 * A group of notes with &#34;irregular&#34; (sometimes called &#34;irrational&#34;) rhythmic values, for example, three notes in the time normally occupied by two or nine in the time of five.
			 * @see https://music-encoding.org/guidelines/v5/elements/tuplet.html
			 */
			tuplet: v.optional(v.union([TupletSchema, v.array(TupletSchema)])),
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
