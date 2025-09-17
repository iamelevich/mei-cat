import * as v from "valibot";
import { StandardTagSchema } from "../common";

/**
 * Contains the whole of a single musical text, excluding any front or back matter.
 * @see https://music-encoding.org/guidelines/v5/elements/body.html
 */
export const BodySchema = v.object({
  ...StandardTagSchema.entries,
});

export type BodyData = v.InferOutput<typeof BodySchema>;
