import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * string element.
 * @see https://music-encoding.org/guidelines/v5/elements/string.html
 */
export const StringSchema = AnythingObjectSchema; // TODO: implement element

export type StringData = v.InferOutput<typeof StringSchema>;
