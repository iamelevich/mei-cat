import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a bend.
 * @see https://music-encoding.org/guidelines/v5/elements/bend.html
 */
export const BendSchema = AnythingObjectSchema; // TODO: implement element

export type BendData = v.InferOutput<typeof BendSchema>;
