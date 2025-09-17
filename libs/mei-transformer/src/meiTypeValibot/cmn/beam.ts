import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Groups a number of notes together with a beam.
 * @see https://music-encoding.org/guidelines/v5/elements/beam.html
 */
export const BeamSchema = AnythingObjectSchema; // TODO: implement element

export type BeamData = v.InferOutput<typeof BeamSchema>;
