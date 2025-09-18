import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a related item.
 * @see https://music-encoding.org/guidelines/v5/elements/relatedItem.html
 */
export const RelatedItemSchema = AnythingObjectSchema; // TODO: implement element

export type RelatedItemData = v.InferOutput<typeof RelatedItemSchema>;
