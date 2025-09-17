import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a measure rest.
 * @see https://music-encoding.org/guidelines/v5/elements/mRest.html
 */
export const MRestSchema = AnythingObjectSchema; // TODO: implement element

export type MRestData = v.InferOutput<typeof MRestSchema>;
