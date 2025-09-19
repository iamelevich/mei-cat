import * as v from "valibot";
import { AttrMidiAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrMidiGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrMidiLogSchema } from "..";
import {
	CcSchema,
	ChanPrSchema,
	ChanSchema,
	CueSchema,
	HexSchema,
	MarkerSchema,
	MetaTextSchema,
	NoteOffSchema,
	NoteOnSchema,
	PortSchema,
	ProgSchema,
	SeqNumSchema,
	TrkNameSchema,
	VelSchema,
} from ".";

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
export const MidiSchema = v.intersect([
	MidiBaseSchema,
	v.object({
		/**
		 * Reference to element cc
		 * @see https://music-encoding.org/guidelines/v5/elements/cc.html
		 */
		cc: v.optional(
			v.union([v.lazy(() => CcSchema), v.array(v.lazy(() => CcSchema))]),
		),
		/**
		 * Reference to element chan
		 * @see https://music-encoding.org/guidelines/v5/elements/chan.html
		 */
		chan: v.optional(
			v.union([v.lazy(() => ChanSchema), v.array(v.lazy(() => ChanSchema))]),
		),
		/**
		 * Reference to element chanPr
		 * @see https://music-encoding.org/guidelines/v5/elements/chanPr.html
		 */
		chanPr: v.optional(
			v.union([
				v.lazy(() => ChanPrSchema),
				v.array(v.lazy(() => ChanPrSchema)),
			]),
		),
		/**
		 * Reference to element cue
		 * @see https://music-encoding.org/guidelines/v5/elements/cue.html
		 */
		cue: v.optional(
			v.union([v.lazy(() => CueSchema), v.array(v.lazy(() => CueSchema))]),
		),
		/**
		 * Reference to element hex
		 * @see https://music-encoding.org/guidelines/v5/elements/hex.html
		 */
		hex: v.optional(
			v.union([v.lazy(() => HexSchema), v.array(v.lazy(() => HexSchema))]),
		),
		/**
		 * Reference to element marker
		 * @see https://music-encoding.org/guidelines/v5/elements/marker.html
		 */
		marker: v.optional(
			v.union([
				v.lazy(() => MarkerSchema),
				v.array(v.lazy(() => MarkerSchema)),
			]),
		),
		/**
		 * Reference to element metaText
		 * @see https://music-encoding.org/guidelines/v5/elements/metaText.html
		 */
		metaText: v.optional(
			v.union([
				v.lazy(() => MetaTextSchema),
				v.array(v.lazy(() => MetaTextSchema)),
			]),
		),
		/**
		 * Reference to element noteOff
		 * @see https://music-encoding.org/guidelines/v5/elements/noteOff.html
		 */
		noteOff: v.optional(
			v.union([
				v.lazy(() => NoteOffSchema),
				v.array(v.lazy(() => NoteOffSchema)),
			]),
		),
		/**
		 * Reference to element noteOn
		 * @see https://music-encoding.org/guidelines/v5/elements/noteOn.html
		 */
		noteOn: v.optional(
			v.union([
				v.lazy(() => NoteOnSchema),
				v.array(v.lazy(() => NoteOnSchema)),
			]),
		),
		/**
		 * Reference to element port
		 * @see https://music-encoding.org/guidelines/v5/elements/port.html
		 */
		port: v.optional(
			v.union([v.lazy(() => PortSchema), v.array(v.lazy(() => PortSchema))]),
		),
		/**
		 * Reference to element prog
		 * @see https://music-encoding.org/guidelines/v5/elements/prog.html
		 */
		prog: v.optional(
			v.union([v.lazy(() => ProgSchema), v.array(v.lazy(() => ProgSchema))]),
		),
		/**
		 * Reference to element seqNum
		 * @see https://music-encoding.org/guidelines/v5/elements/seqNum.html
		 */
		seqNum: v.optional(
			v.union([
				v.lazy(() => SeqNumSchema),
				v.array(v.lazy(() => SeqNumSchema)),
			]),
		),
		/**
		 * Reference to element trkName
		 * @see https://music-encoding.org/guidelines/v5/elements/trkName.html
		 */
		trkName: v.optional(
			v.union([
				v.lazy(() => TrkNameSchema),
				v.array(v.lazy(() => TrkNameSchema)),
			]),
		),
		/**
		 * Reference to element vel
		 * @see https://music-encoding.org/guidelines/v5/elements/vel.html
		 */
		vel: v.optional(
			v.union([v.lazy(() => VelSchema), v.array(v.lazy(() => VelSchema))]),
		),
	}),
]);

export type MidiData = v.InferOutput<typeof MidiSchema>;
