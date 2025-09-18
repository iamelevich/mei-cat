import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the seal of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/sealDesc.html
 */
export const SealDescSchema = AnythingObjectSchema; // TODO: implement element

export type SealDescData = v.InferOutput<typeof SealDescSchema>;
