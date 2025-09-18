import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains external data.
 * @see https://music-encoding.org/guidelines/v5/elements/extData.html
 */
export const ExtDataSchema = AnythingObjectSchema; // TODO: implement element

export type ExtDataData = v.InferOutput<typeof ExtDataSchema>;
