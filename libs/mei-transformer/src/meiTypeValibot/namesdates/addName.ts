import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains an additional name component, such as a nickname, epithet, or alias.
 * @see https://music-encoding.org/guidelines/v5/elements/addName.html
 */
export const AddNameSchema = AnythingObjectSchema; // TODO: implement element

export type AddNameData = v.InferOutput<typeof AddNameSchema>;
