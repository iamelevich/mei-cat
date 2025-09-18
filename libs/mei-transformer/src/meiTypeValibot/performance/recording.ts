import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * recording element.
 * @see https://music-encoding.org/guidelines/v5/elements/recording.html
 */
export const RecordingSchema = AnythingObjectSchema; // TODO: implement element

export type RecordingData = v.InferOutput<typeof RecordingSchema>;
