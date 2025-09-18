import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * performance element.
 * @see https://music-encoding.org/guidelines/v5/elements/performance.html
 */
export const PerformanceSchema = AnythingObjectSchema; // TODO: implement element

export type PerformanceData = v.InferOutput<typeof PerformanceSchema>;
