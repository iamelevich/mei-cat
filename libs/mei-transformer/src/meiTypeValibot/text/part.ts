import * as v from "valibot";
import { StandardTagSchema } from "../common";

/**
 * An alternative visual rendition of the score from the point of view of a particular performer (or group of performers).
 * @see https://music-encoding.org/guidelines/v5/elements/part.html
 */
export const PartSchema = v.object({
  ...StandardTagSchema.entries,
});

export type PartData = v.InferOutput<typeof PartSchema>;
