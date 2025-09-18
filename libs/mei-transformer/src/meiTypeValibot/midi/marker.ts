import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * marker element.
 * @see https://music-encoding.org/guidelines/v5/elements/marker.html
 */
export const MarkerSchema = AnythingObjectSchema; // TODO: implement element

export type MarkerData = v.InferOutput<typeof MarkerSchema>;
