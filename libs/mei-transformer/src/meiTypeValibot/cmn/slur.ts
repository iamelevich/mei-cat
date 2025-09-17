import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a slur marking.
 * @see https://music-encoding.org/guidelines/v5/elements/slur.html
 */
export const SlurSchema = AnythingObjectSchema; // TODO: implement element

export type SlurData = v.InferOutput<typeof SlurSchema>;
