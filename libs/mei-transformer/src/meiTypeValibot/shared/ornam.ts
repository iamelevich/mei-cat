import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * An indication of ornamentation.
 * @see https://music-encoding.org/guidelines/v5/elements/ornam.html
 */
export const OrnamSchema = AnythingObjectSchema; // TODO: implement element

export type OrnamData = v.InferOutput<typeof OrnamSchema>;
