import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a genre designation.
 * @see https://music-encoding.org/guidelines/v5/elements/genre.html
 */
export const GenreSchema = AnythingObjectSchema; // TODO: implement element

export type GenreData = v.InferOutput<typeof GenreSchema>;
