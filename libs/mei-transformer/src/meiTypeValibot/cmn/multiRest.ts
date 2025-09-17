import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a multi-measure rest.
 * @see https://music-encoding.org/guidelines/v5/elements/multiRest.html
 */
export const MultiRestSchema = AnythingObjectSchema; // TODO: implement element

export type MultiRestData = v.InferOutput<typeof MultiRestSchema>;
