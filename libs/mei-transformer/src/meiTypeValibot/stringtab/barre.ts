import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * barre element.
 * @see https://music-encoding.org/guidelines/v5/elements/barre.html
 */
export const BarreSchema = AnythingObjectSchema; // TODO: implement element

export type BarreData = v.InferOutput<typeof BarreSchema>;
