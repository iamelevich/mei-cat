import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Bundles prefatory text found before the start of the musical text.
 * @see https://music-encoding.org/guidelines/v5/elements/front.html
 */
export const FrontSchema = AnythingObjectSchema; // TODO: implement element

export type FrontData = v.InferOutput<typeof FrontSchema>;
