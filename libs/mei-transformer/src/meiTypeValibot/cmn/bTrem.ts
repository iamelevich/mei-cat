import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a beam tremolo.
 * @see https://music-encoding.org/guidelines/v5/elements/bTrem.html
 */
export const BTremSchema = AnythingObjectSchema; // TODO: implement element

export type BTremData = v.InferOutput<typeof BTremSchema>;
