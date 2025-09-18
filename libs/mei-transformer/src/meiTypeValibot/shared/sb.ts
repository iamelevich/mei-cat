import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Marks the beginning of a system break.
 * @see https://music-encoding.org/guidelines/v5/elements/sb.html
 */
export const SbSchema = AnythingObjectSchema; // TODO: implement element

export type SbData = v.InferOutput<typeof SbSchema>;
