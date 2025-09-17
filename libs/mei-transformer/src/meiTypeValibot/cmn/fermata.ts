import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a fermata.
 * @see https://music-encoding.org/guidelines/v5/elements/fermata.html
 */
export const FermataSchema = AnythingObjectSchema; // TODO: implement element

export type FermataData = v.InferOutput<typeof FermataSchema>;
