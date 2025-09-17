import * as v from "valibot";
import { StandardTagSchema } from "../common";

/**
 * Single element of a figured bass indication.
 * @see https://music-encoding.org/guidelines/v5/elements/f.html
 */
export const FSchema = v.object({
  ...StandardTagSchema.entries,
});

export type FData = v.InferOutput<typeof FSchema>;
