import * as v from "valibot";
import { BendSchema, type BendData } from "../bend";
import { CaesuraSchema, type CaesuraData } from "../caesura";
import { CpMarkSchema, type CpMarkData } from "../cpMark";
import { DirSchema, type DirData } from "../dir";
import { DynamSchema, type DynamData } from "../dynam";
import { GlissSchema, type GlissData } from "../gliss";
import { MetaMarkSchema, type MetaMarkData } from "../metaMark";
import { OrnamSchema, type OrnamData } from "../ornam";
import { PhraseSchema, type PhraseData } from "../phrase";
import { RepeatMarkSchema, type RepeatMarkData } from "../repeatMark";
import { SpSchema, type SpData } from "../sp";
import { TempoSchema, type TempoData } from "../tempo";
import { ControlEventLikeHarmonySchema } from "./controlEventLike.harmony";
import { FingeringLikeSchema } from "./fingeringLike";
import { StageDirLikeSchema } from "./stageDirLike";

/**
 * Groups elements that represent control events.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.controlEventLike.html
 */
export const ControlEventLikeSchema = v.object({
  // Child elements - zero or more of each
  bend: v.optional(
    v.union([v.lazy(() => BendSchema), v.array(v.lazy(() => BendSchema))]),
  ),
  caesura: v.optional(
    v.union([v.lazy(() => CaesuraSchema), v.array(v.lazy(() => CaesuraSchema))]),
  ),
  cpMark: v.optional(
    v.union([v.lazy(() => CpMarkSchema), v.array(v.lazy(() => CpMarkSchema))]),
  ),
  dir: v.optional(
    v.union([v.lazy(() => DirSchema), v.array(v.lazy(() => DirSchema))]),
  ),
  dynam: v.optional(
    v.union([v.lazy(() => DynamSchema), v.array(v.lazy(() => DynamSchema))]),
  ),
  gliss: v.optional(
    v.union([v.lazy(() => GlissSchema), v.array(v.lazy(() => GlissSchema))]),
  ),
  metaMark: v.optional(
    v.union([v.lazy(() => MetaMarkSchema), v.array(v.lazy(() => MetaMarkSchema))]),
  ),
  ornam: v.optional(
    v.union([v.lazy(() => OrnamSchema), v.array(v.lazy(() => OrnamSchema))]),
  ),
  phrase: v.optional(
    v.union([v.lazy(() => PhraseSchema), v.array(v.lazy(() => PhraseSchema))]),
  ),
  repeatMark: v.optional(
    v.union([v.lazy(() => RepeatMarkSchema), v.array(v.lazy(() => RepeatMarkSchema))]),
  ),
  sp: v.optional(
    v.union([v.lazy(() => SpSchema), v.array(v.lazy(() => SpSchema))]),
  ),
  tempo: v.optional(
    v.union([v.lazy(() => TempoSchema), v.array(v.lazy(() => TempoSchema))]),
  ),

  // Merge model classes
  ...ControlEventLikeHarmonySchema.entries,
  ...FingeringLikeSchema.entries,
  ...StageDirLikeSchema.entries,
});

export type ControlEventLikeData = v.InferOutput<typeof ControlEventLikeSchema>;
