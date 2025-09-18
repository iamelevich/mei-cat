import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a harmony.
 * @see https://music-encoding.org/guidelines/v5/elements/harm.html
 */
export const HarmSchema = AnythingObjectSchema; // TODO: implement element

export type HarmData = v.InferOutput<typeof HarmSchema>;
