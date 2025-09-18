import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Groups elements that represent surfaces.
 * @see https://music-encoding.org/guidelines/v5/elements/surface.html
 */
export const SurfaceSchema = AnythingObjectSchema; // TODO: implement element

export type SurfaceData = v.InferOutput<typeof SurfaceSchema>;
