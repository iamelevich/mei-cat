import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a musical part.
 * @see https://music-encoding.org/guidelines/v5/elements/part.html
 */
export const PartSchema = AnythingObjectSchema; // TODO: implement element

export type PartData = v.InferOutput<typeof PartSchema>;
