import * as v from "valibot";
import { ArpegSchema, type ArpegData } from "../../shared/arpeg";
import { AttaccaSchema, type AttaccaData } from "../../shared/attacca";
import { BeamSpanSchema, type BeamSpanData } from "../../shared/beamSpan";
import { BracketSpanSchema, type BracketSpanData } from "../../shared/bracketSpan";
import { BreathSchema, type BreathData } from "../../shared/breath";
import { FermataSchema, type FermataData } from "../../shared/fermata";
import { HairpinSchema, type HairpinData } from "../../shared/hairpin";
import { HarpPedalSchema, type HarpPedalData } from "../../shared/harpPedal";
import { LvSchema, type LvData } from "../../shared/lv";
import { OctaveSchema, type OctaveData } from "../../shared/octave";
import { PedalSchema, type PedalData } from "../../shared/pedal";
import { RehSchema, type RehData } from "../../shared/reh";
import { SlurSchema, type SlurData } from "../../shared/slur";
import { TieSchema, type TieData } from "../../shared/tie";
import { TupletSpanSchema, type TupletSpanData } from "../../shared/tupletSpan";
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
