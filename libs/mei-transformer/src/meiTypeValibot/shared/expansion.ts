import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains an expansion of a bibliographic reference.
 * @see https://music-encoding.org/guidelines/v5/elements/expansion.html
 */
export const ExpansionSchema = AnythingObjectSchema; // TODO: implement element

export type ExpansionData = v.InferOutput<typeof ExpansionSchema>;
