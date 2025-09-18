import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * genDesc element.
 * @see https://music-encoding.org/guidelines/v5/elements/genDesc.html
 */
export const GenDescSchema = AnythingObjectSchema; // TODO: implement element

export type GenDescData = v.InferOutput<typeof GenDescSchema>;
