import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a rehearsal mark.
 * @see https://music-encoding.org/guidelines/v5/elements/reh.html
 */
export const RehSchema = AnythingObjectSchema; // TODO: implement element

export type RehData = v.InferOutput<typeof RehSchema>;
