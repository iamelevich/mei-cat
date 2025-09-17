import * as v from "valibot";
import { StandardTagSchema } from "../common";

/**
 * Bundles prefatory text found before the start of the musical text.
 * @see https://music-encoding.org/guidelines/v5/elements/front.html
 */
export const FrontSchema = v.object({
  ...StandardTagSchema.entries,
});

export type FrontData = v.InferOutput<typeof FrontSchema>;
