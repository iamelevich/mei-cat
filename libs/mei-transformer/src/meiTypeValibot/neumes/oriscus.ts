import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * oriscus element.
 * @see https://music-encoding.org/guidelines/v5/elements/oriscus.html
 */
export const OriscusSchema = AnythingObjectSchema; // TODO: implement element

export type OriscusData = v.InferOutput<typeof OriscusSchema>;
