import * as v from "valibot";
import {
	type BarLineData,
	BarLineSchema,
	type ChordData,
	ChordSchema,
	type ClefData,
	ClefSchema,
	type ClefGrpData,
	ClefGrpSchema,
	type CustosData,
	CustosSchema,
	type NoteData,
	NoteSchema,
	type PadData,
	PadSchema,
	type RestData,
	RestSchema,
	type SpaceData,
	SpaceSchema,
	type ModelKeySigLikeData,
	ModelKeySigLikeSchema,
	type ModelMeterSigLikeData,
	ModelMeterSigLikeSchema,
} from "..";
import { type TabGrpData, TabGrpSchema } from "../../stringtab";

/**
 * Groups event elements that occur in all notational repertoires.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.eventLike.html
 */
export const ModelEventLikeSchema: v.GenericSchema<ModelEventLikeData> =
	v.intersect([
		v.object({
			/**
			 * Vertical line drawn through one or more staves that divides musical notation into metrical units.
			 * @see https://music-encoding.org/guidelines/v5/elements/barLine.html
			 */
			barLine: v.optional(
				v.union([
					v.lazy(() => BarLineSchema),
					v.array(v.lazy(() => BarLineSchema)),
				]),
			),
			/**
			 * A simultaneous sounding of two or more notes in the same layer *with the same duration*.
			 * @see https://music-encoding.org/guidelines/v5/elements/chord.html
			 */
			chord: v.optional(
				v.union([
					v.lazy(() => ChordSchema),
					v.array(v.lazy(() => ChordSchema)),
				]),
			),
			/**
			 * Indication of the exact location of a particular note on the staff and, therefore, the other notes as well.
			 * @see https://music-encoding.org/guidelines/v5/elements/clef.html
			 */
			clef: v.optional(
				v.union([v.lazy(() => ClefSchema), v.array(v.lazy(() => ClefSchema))]),
			),
			/**
			 * A set of simultaneously-occurring clefs.
			 * @see https://music-encoding.org/guidelines/v5/elements/clefGrp.html
			 */
			clefGrp: v.optional(
				v.union([
					v.lazy(() => ClefGrpSchema),
					v.array(v.lazy(() => ClefGrpSchema)),
				]),
			),
			/**
			 * Symbol placed at the end of a line of music to indicate the first note of the next line. Sometimes called a &#34;direct&#34;.
			 * @see https://music-encoding.org/guidelines/v5/elements/custos.html
			 */
			custos: v.optional(
				v.union([
					v.lazy(() => CustosSchema),
					v.array(v.lazy(() => CustosSchema)),
				]),
			),
			/**
			 * A single pitched event.
			 * @see https://music-encoding.org/guidelines/v5/elements/note.html
			 */
			note: v.optional(
				v.union([v.lazy(() => NoteSchema), v.array(v.lazy(() => NoteSchema))]),
			),
			/**
			 * An indication of extra visual space between notational elements.
			 * @see https://music-encoding.org/guidelines/v5/elements/pad.html
			 */
			pad: v.optional(
				v.union([v.lazy(() => PadSchema), v.array(v.lazy(() => PadSchema))]),
			),
			/**
			 * A non-sounding event found in the source being transcribed.
			 * @see https://music-encoding.org/guidelines/v5/elements/rest.html
			 */
			rest: v.optional(
				v.union([v.lazy(() => RestSchema), v.array(v.lazy(() => RestSchema))]),
			),
			/**
			 * A placeholder used to fill an incomplete measure, layer, etc. most often so that the combined duration of the events equals the number of beats in the measure.
			 * @see https://music-encoding.org/guidelines/v5/elements/space.html
			 */
			space: v.optional(
				v.union([
					v.lazy(() => SpaceSchema),
					v.array(v.lazy(() => SpaceSchema)),
				]),
			),
			/**
			 * A group of simultaneous tab notes, comparable to a chord in CMN. Rarely, may also contain rests, as in some &#34;German&#34; lute tablatures.
			 * @see https://music-encoding.org/guidelines/v5/elements/tabGrp.html
			 */
			tabGrp: v.optional(
				v.union([
					v.lazy(() => TabGrpSchema),
					v.array(v.lazy(() => TabGrpSchema)),
				]),
			),
		}),
		ModelKeySigLikeSchema,
		ModelMeterSigLikeSchema,
	]);

export type ModelEventLikeData = {
	barLine?: BarLineData | BarLineData[];
	chord?: ChordData | ChordData[];
	clef?: ClefData | ClefData[];
	clefGrp?: ClefGrpData | ClefGrpData[];
	custos?: CustosData | CustosData[];
	note?: NoteData | NoteData[];
	pad?: PadData | PadData[];
	rest?: RestData | RestData[];
	space?: SpaceData | SpaceData[];
	tabGrp?: TabGrpData | TabGrpData[];
} & ModelKeySigLikeData &
	ModelMeterSigLikeData;
