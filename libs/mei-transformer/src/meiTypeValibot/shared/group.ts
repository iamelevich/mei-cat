import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Groups elements.
 * @see https://music-encoding.org/guidelines/v5/elements/group.html
 */
export const GroupSchema = AnythingObjectSchema; // TODO: implement element

export type GroupData = v.InferOutput<typeof GroupSchema>;
