import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Groups elements that represent item lists.
 * @see https://music-encoding.org/guidelines/v5/elements/itemList.html
 */
export const ItemListSchema = AnythingObjectSchema; // TODO: implement element

export type ItemListData = v.InferOutput<typeof ItemListSchema>;
