import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * strophicus element.
 * @see https://music-encoding.org/guidelines/v5/elements/strophicus.html
 */
export const StrophicusSchema = AnythingObjectSchema; // TODO: implement element

export type StrophicusData = v.InferOutput<typeof StrophicusSchema>;
