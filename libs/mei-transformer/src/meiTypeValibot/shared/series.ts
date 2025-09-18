import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a series.
 * @see https://music-encoding.org/guidelines/v5/elements/series.html
 */
export const SeriesSchema = AnythingObjectSchema; // TODO: implement element

export type SeriesData = v.InferOutput<typeof SeriesSchema>;
