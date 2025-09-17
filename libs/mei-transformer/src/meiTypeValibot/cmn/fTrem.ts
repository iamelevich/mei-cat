import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a fingered tremolo.
 * @see https://music-encoding.org/guidelines/v5/elements/fTrem.html
 */
export const FTremSchema = AnythingObjectSchema; // TODO: implement element

export type FTremData = v.InferOutput<typeof FTremSchema>;
