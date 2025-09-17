import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a single measure.
 * @see https://music-encoding.org/guidelines/v5/elements/measure.html
 */
export const MeasureSchema = AnythingObjectSchema; // TODO: implement element

export type MeasureData = v.InferOutput<typeof MeasureSchema>;
