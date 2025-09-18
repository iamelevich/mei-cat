import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Single element of a figured bass indication.
 * @see https://music-encoding.org/guidelines/v5/elements/f.html
 */
export const FSchema = AnythingObjectSchema; // TODO: implement element

export type FData = v.InferOutput<typeof FSchema>;
