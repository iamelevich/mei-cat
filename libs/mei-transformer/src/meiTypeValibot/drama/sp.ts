import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * sp element.
 * @see https://music-encoding.org/guidelines/v5/elements/sp.html
 */
export const SpSchema = AnythingObjectSchema; // TODO: implement element

export type SpData = v.InferOutput<typeof SpSchema>;
