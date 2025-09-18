import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains the name of the recipient.
 * @see https://music-encoding.org/guidelines/v5/elements/recipient.html
 */
export const RecipientSchema = AnythingObjectSchema; // TODO: implement element

export type RecipientData = v.InferOutput<typeof RecipientSchema>;
