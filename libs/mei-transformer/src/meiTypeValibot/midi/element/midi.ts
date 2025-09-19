import * as v from "valibot";
import { AttrMidiAnlSchema } from "../../analytical/attr/midi.anl";
import { StandardTagSchema } from "../../common";
import { AttrMidiGesSchema } from "../../gestural/attr/midi.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMidiLogSchema } from "../attr/midi.log";
import { CcSchema } from "../element/cc";
import { ChanSchema } from "../element/chan";
import { ChanPrSchema } from "../element/chanPr";
import { CueSchema } from "../element/cue";
import { HexSchema } from "../element/hex";
import { MarkerSchema } from "../element/marker";
import { MetaTextSchema } from "../element/metaText";
import { NoteOffSchema } from "../element/noteOff";
import { NoteOnSchema } from "../element/noteOn";
import { PortSchema } from "../element/port";
import { ProgSchema } from "../element/prog";
import { SeqNumSchema } from "../element/seqNum";
import { TrkNameSchema } from "../element/trkName";
import { VelSchema } from "../element/vel";

/**
 * Base schema with attribute, to simplify types for MidiSchema
 */
const MidiBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMidiAnlSchema.entries,
	...AttrMidiGesSchema.entries,
	...AttrMidiLogSchema.entries,
});

/**
 * Container for elements that contain information useful when generating MIDI output.
 * @see https://music-encoding.org/guidelines/v5/elements/midi.html
 */
export const MidiSchema = v.lazy(() =>
	v.intersect([
		MidiBaseSchema,
		v.object({
			/**
			 * Reference to element cc
			 * @see https://music-encoding.org/guidelines/v5/elements/cc.html
			 */
			cc: v.optional(v.union([v.array(CcSchema), CcSchema])),
			/**
			 * Reference to element chan
			 * @see https://music-encoding.org/guidelines/v5/elements/chan.html
			 */
			chan: v.optional(v.union([v.array(ChanSchema), ChanSchema])),
			/**
			 * Reference to element chanPr
			 * @see https://music-encoding.org/guidelines/v5/elements/chanPr.html
			 */
			chanPr: v.optional(v.union([v.array(ChanPrSchema), ChanPrSchema])),
			/**
			 * Reference to element cue
			 * @see https://music-encoding.org/guidelines/v5/elements/cue.html
			 */
			cue: v.optional(v.union([v.array(CueSchema), CueSchema])),
			/**
			 * Reference to element hex
			 * @see https://music-encoding.org/guidelines/v5/elements/hex.html
			 */
			hex: v.optional(v.union([v.array(HexSchema), HexSchema])),
			/**
			 * Reference to element marker
			 * @see https://music-encoding.org/guidelines/v5/elements/marker.html
			 */
			marker: v.optional(v.union([v.array(MarkerSchema), MarkerSchema])),
			/**
			 * Reference to element metaText
			 * @see https://music-encoding.org/guidelines/v5/elements/metaText.html
			 */
			metaText: v.optional(v.union([v.array(MetaTextSchema), MetaTextSchema])),
			/**
			 * Reference to element noteOff
			 * @see https://music-encoding.org/guidelines/v5/elements/noteOff.html
			 */
			noteOff: v.optional(v.union([v.array(NoteOffSchema), NoteOffSchema])),
			/**
			 * Reference to element noteOn
			 * @see https://music-encoding.org/guidelines/v5/elements/noteOn.html
			 */
			noteOn: v.optional(v.union([v.array(NoteOnSchema), NoteOnSchema])),
			/**
			 * Reference to element port
			 * @see https://music-encoding.org/guidelines/v5/elements/port.html
			 */
			port: v.optional(v.union([v.array(PortSchema), PortSchema])),
			/**
			 * Reference to element prog
			 * @see https://music-encoding.org/guidelines/v5/elements/prog.html
			 */
			prog: v.optional(v.union([v.array(ProgSchema), ProgSchema])),
			/**
			 * Reference to element seqNum
			 * @see https://music-encoding.org/guidelines/v5/elements/seqNum.html
			 */
			seqNum: v.optional(v.union([v.array(SeqNumSchema), SeqNumSchema])),
			/**
			 * Reference to element trkName
			 * @see https://music-encoding.org/guidelines/v5/elements/trkName.html
			 */
			trkName: v.optional(v.union([v.array(TrkNameSchema), TrkNameSchema])),
			/**
			 * Reference to element vel
			 * @see https://music-encoding.org/guidelines/v5/elements/vel.html
			 */
			vel: v.optional(v.union([v.array(VelSchema), VelSchema])),
		}),
	]),
);

export type MidiData = v.InferOutput<typeof MidiSchema>;
