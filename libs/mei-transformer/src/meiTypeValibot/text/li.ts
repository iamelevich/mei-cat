import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Single instance or exemplar of an item in a list.
 * @see https://music-encoding.org/guidelines/v5/elements/li.html
 */
export const LiSchema = AnythingObjectSchema; // TODO: implement element

export type LiData = v.InferOutput<typeof LiSchema>;
