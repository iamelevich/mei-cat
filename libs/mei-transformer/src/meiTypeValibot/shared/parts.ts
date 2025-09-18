import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains musical parts.
 * @see https://music-encoding.org/guidelines/v5/elements/parts.html
 */
export const PartsSchema = AnythingObjectSchema; // TODO: implement element

export type PartsData = v.InferOutput<typeof PartsSchema>;
