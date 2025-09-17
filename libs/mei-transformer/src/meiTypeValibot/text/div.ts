import * as v from "valibot";
import { StandardTagSchema } from "../common";

/**
 * Major structural division of text, such as a preface, chapter or section.
 * @see https://music-encoding.org/guidelines/v5/elements/div.html
 */
export const DivSchema = v.object({
  ...StandardTagSchema.entries,
});

export type DivData = v.InferOutput<typeof DivSchema>;
