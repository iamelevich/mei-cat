import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * quilisma element.
 * @see https://music-encoding.org/guidelines/v5/elements/quilisma.html
 */
export const QuilismaSchema = AnythingObjectSchema; // TODO: implement element

export type QuilismaData = v.InferOutput<typeof QuilismaSchema>;
