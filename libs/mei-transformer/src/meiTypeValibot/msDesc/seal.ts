import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the seal of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/seal.html
 */
export const SealSchema = AnythingObjectSchema; // TODO: implement element

export type SealData = v.InferOutput<typeof SealSchema>;
