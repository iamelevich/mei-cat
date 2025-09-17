import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a meta mark.
 * @see https://music-encoding.org/guidelines/v5/elements/metaMark.html
 */
export const MetaMarkSchema = AnythingObjectSchema; // TODO: implement element

export type MetaMarkData = v.InferOutput<typeof MetaMarkSchema>;
