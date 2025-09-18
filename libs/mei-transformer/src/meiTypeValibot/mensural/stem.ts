import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * stem element.
 * @see https://music-encoding.org/guidelines/v5/elements/stem.html
 */
export const StemSchema = AnythingObjectSchema; // TODO: implement element

export type StemData = v.InferOutput<typeof StemSchema>;
