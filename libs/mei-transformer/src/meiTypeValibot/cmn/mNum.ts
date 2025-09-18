import type * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a measure number.
 * @see https://music-encoding.org/guidelines/v5/elements/mNum.html
 */
export const MNumSchema = AnythingObjectSchema; // TODO: implement element

export type MNumData = v.InferOutput<typeof MNumSchema>;
