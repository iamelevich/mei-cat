import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * mensur element.
 * @see https://music-encoding.org/guidelines/v5/elements/mensur.html
 */
export const MensurSchema = AnythingObjectSchema; // TODO: implement element

export type MensurData = v.InferOutput<typeof MensurSchema>;
