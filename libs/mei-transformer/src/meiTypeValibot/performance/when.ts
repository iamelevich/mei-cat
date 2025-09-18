import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * when element.
 * @see https://music-encoding.org/guidelines/v5/elements/when.html
 */
export const WhenSchema = AnythingObjectSchema; // TODO: implement element

export type WhenData = v.InferOutput<typeof WhenSchema>;
