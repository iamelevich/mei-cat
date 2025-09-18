import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a cast item.
 * @see https://music-encoding.org/guidelines/v5/elements/castItem.html
 */
export const CastItemSchema = AnythingObjectSchema; // TODO: implement element

export type CastItemData = v.InferOutput<typeof CastItemSchema>;
