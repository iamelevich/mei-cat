import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains the place of publication.
 * @see https://music-encoding.org/guidelines/v5/elements/pubPlace.html
 */
export const PubPlaceSchema = AnythingObjectSchema; // TODO: implement element

export type PubPlaceData = v.InferOutput<typeof PubPlaceSchema>;
