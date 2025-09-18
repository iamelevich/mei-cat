import * as v from "valibot";
import { TempoSchema } from "../tempo";
import { ControlEventLikeHarmonySchema } from "../../harmony/model/controlEventLike.harmony";
import { FingeringLikeSchema } from "../../fingering/model/fingeringLike";
import { StageDirLikeSchema } from "./stageDirLike";
import { BendSchema, GlissSchema, RepeatMarkSchema } from "../../cmn";
import { CpMarkSchema, MetaMarkSchema } from "../../edittrans";
import { CaesuraSchema } from "../caesura";
import { DirSchema } from "../dir";
import { DynamSchema } from "../dynam";
import { OrnamSchema } from "../ornam";
import { PhraseSchema } from "../phrase";

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
