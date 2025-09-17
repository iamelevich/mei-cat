import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Groups a number of notes together with a beam.
 * @see https://music-encoding.org/guidelines/v5/elements/beamSpan.html
 */
export const BeamSpanSchema = AnythingObjectSchema; // TODO: implement element

export type BeamSpanData = v.InferOutput<typeof BeamSpanSchema>;
