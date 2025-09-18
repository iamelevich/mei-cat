import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * A formatting element that contains a series of items separated from one another and arranged in a vertical, horizontal, or matrix-like manner.
 * @see https://music-encoding.org/guidelines/v5/elements/list.html
 */
export const ListSchema = AnythingObjectSchema; // TODO: implement element

export type ListData = v.InferOutput<typeof ListSchema>;
