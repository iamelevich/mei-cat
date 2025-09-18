import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * curve element.
 * @see https://music-encoding.org/guidelines/v5/elements/curve.html
 */
export const CurveSchema = AnythingObjectSchema; // TODO: implement element

export type CurveData = v.InferOutput<typeof CurveSchema>;
