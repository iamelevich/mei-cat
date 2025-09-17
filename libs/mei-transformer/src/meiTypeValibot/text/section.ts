import * as v from "valibot";
import { StandardTagSchema } from "../common";

/**
 * Segment of music data.
 * @see https://music-encoding.org/guidelines/v5/elements/section.html
 */
export const SectionSchema = v.object({
  ...StandardTagSchema.entries,
});

export type SectionData = v.InferOutput<typeof SectionSchema>;
