import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains the incipit of a musical work.
 * @see https://music-encoding.org/guidelines/v5/elements/incip.html
 */
export const IncipSchema = AnythingObjectSchema; // TODO: implement element

export type IncipData = v.InferOutput<typeof IncipSchema>;
