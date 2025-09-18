import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a caesura.
 * @see https://music-encoding.org/guidelines/v5/elements/caesura.html
 */
export const CaesuraSchema = AnythingObjectSchema; // TODO: implement element

export type CaesuraData = v.InferOutput<typeof CaesuraSchema>;
