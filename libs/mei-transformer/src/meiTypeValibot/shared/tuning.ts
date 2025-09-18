import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains tuning information.
 * @see https://music-encoding.org/guidelines/v5/elements/tuning.html
 */
export const TuningSchema = AnythingObjectSchema; // TODO: implement element

export type TuningData = v.InferOutput<typeof TuningSchema>;
