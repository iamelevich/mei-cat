import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Alternative ending for a repeated passage of music; i.e., prima volta, seconda volta, etc.
 * @see https://music-encoding.org/guidelines/v5/elements/ending.html
 */
export const EndingSchema = AnythingObjectSchema; // TODO: implement element

export type EndingData = v.InferOutput<typeof EndingSchema>;
