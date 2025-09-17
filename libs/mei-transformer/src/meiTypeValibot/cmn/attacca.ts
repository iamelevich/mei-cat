import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates that the next section should begin immediately after the current one.
 * @see https://music-encoding.org/guidelines/v5/elements/attacca.html
 */
export const AttaccaSchema = AnythingObjectSchema; // TODO: implement element

export type AttaccaData = v.InferOutput<typeof AttaccaSchema>;
