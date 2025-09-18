import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Groups elements that represent facsimiles.
 * @see https://music-encoding.org/guidelines/v5/elements/facsimile.html
 */
export const FacsimileSchema = AnythingObjectSchema; // TODO: implement element

export type FacsimileData = v.InferOutput<typeof FacsimileSchema>;
