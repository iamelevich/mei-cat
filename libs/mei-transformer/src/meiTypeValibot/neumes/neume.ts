import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * neume element.
 * @see https://music-encoding.org/guidelines/v5/elements/neume.html
 */
export const NeumeSchema = AnythingObjectSchema; // TODO: implement element

export type NeumeData = v.InferOutput<typeof NeumeSchema>;
