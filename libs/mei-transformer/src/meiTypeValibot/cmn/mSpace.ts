import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a measure space.
 * @see https://music-encoding.org/guidelines/v5/elements/mSpace.html
 */
export const MSpaceSchema = AnythingObjectSchema; // TODO: implement element

export type MSpaceData = v.InferOutput<typeof MSpaceSchema>;
