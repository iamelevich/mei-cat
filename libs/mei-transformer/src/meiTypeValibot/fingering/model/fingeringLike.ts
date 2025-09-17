import * as v from "valibot";
import { FingSchema, type FingData } from "../fing";
import { FingGrpSchema, type FingGrpData } from "../fingGrp";

/**
 * Groups elements that represent fingering.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.fingeringLike.html
 */
export const FingeringLikeSchema = v.object({
  // Child elements - zero or more of each
  fing: v.optional(
    v.union([v.lazy(() => FingSchema), v.array(v.lazy(() => FingSchema))]),
  ),
  fingGrp: v.optional(
    v.union([v.lazy(() => FingGrpSchema), v.array(v.lazy(() => FingGrpSchema))]),
  ),
});

export type FingeringLikeData = v.InferOutput<typeof FingeringLikeSchema>;
