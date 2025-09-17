import * as v from "valibot";
import { ArpegSchema, type ArpegData } from "../arpeg";
import { AttaccaSchema, type AttaccaData } from "../attacca";
import { BeamSpanSchema, type BeamSpanData } from "../beamSpan";
import { BracketSpanSchema, type BracketSpanData } from "../bracketSpan";
import { BreathSchema, type BreathData } from "../breath";
import { FermataSchema, type FermataData } from "../fermata";
import { HairpinSchema, type HairpinData } from "../hairpin";
import { HarpPedalSchema, type HarpPedalData } from "../harpPedal";
import { LvSchema, type LvData } from "../lv";
import { OctaveSchema, type OctaveData } from "../octave";
import { PedalSchema, type PedalData } from "../pedal";
import { RehSchema, type RehData } from "../reh";
import { SlurSchema, type SlurData } from "../slur";
import { TieSchema, type TieData } from "../tie";
import { TupletSpanSchema, type TupletSpanData } from "../tupletSpan";
import { OrnamentLikeCmnSchema } from "../../shared/model/ornamentLike.cmn";

/**
 * Groups elements that represent control events in common music notation.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.controlEventLike.cmn.html
 */
export const ControlEventLikeCmnSchema = v.object({
  // Child elements - zero or more of each
  arpeg: v.optional(
    v.union([v.lazy(() => ArpegSchema), v.array(v.lazy(() => ArpegSchema))]),
  ),
  attacca: v.optional(
    v.union([v.lazy(() => AttaccaSchema), v.array(v.lazy(() => AttaccaSchema))]),
  ),
  beamSpan: v.optional(
    v.union([v.lazy(() => BeamSpanSchema), v.array(v.lazy(() => BeamSpanSchema))]),
  ),
  bracketSpan: v.optional(
    v.union([v.lazy(() => BracketSpanSchema), v.array(v.lazy(() => BracketSpanSchema))]),
  ),
  breath: v.optional(
    v.union([v.lazy(() => BreathSchema), v.array(v.lazy(() => BreathSchema))]),
  ),
  fermata: v.optional(
    v.union([v.lazy(() => FermataSchema), v.array(v.lazy(() => FermataSchema))]),
  ),
  hairpin: v.optional(
    v.union([v.lazy(() => HairpinSchema), v.array(v.lazy(() => HairpinSchema))]),
  ),
  harpPedal: v.optional(
    v.union([v.lazy(() => HarpPedalSchema), v.array(v.lazy(() => HarpPedalSchema))]),
  ),
  lv: v.optional(
    v.union([v.lazy(() => LvSchema), v.array(v.lazy(() => LvSchema))]),
  ),
  octave: v.optional(
    v.union([v.lazy(() => OctaveSchema), v.array(v.lazy(() => OctaveSchema))]),
  ),
  pedal: v.optional(
    v.union([v.lazy(() => PedalSchema), v.array(v.lazy(() => PedalSchema))]),
  ),
  reh: v.optional(
    v.union([v.lazy(() => RehSchema), v.array(v.lazy(() => RehSchema))]),
  ),
  slur: v.optional(
    v.union([v.lazy(() => SlurSchema), v.array(v.lazy(() => SlurSchema))]),
  ),
  tie: v.optional(
    v.union([v.lazy(() => TieSchema), v.array(v.lazy(() => TieSchema))]),
  ),
  tupletSpan: v.optional(
    v.union([v.lazy(() => TupletSpanSchema), v.array(v.lazy(() => TupletSpanSchema))]),
  ),

  // Merge model classes
  ...OrnamentLikeCmnSchema.entries,
});

export type ControlEventLikeCmnData = v.InferOutput<typeof ControlEventLikeCmnSchema>;
