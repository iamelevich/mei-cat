import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a passage which is distinguished from the surrounding text using quotation marks or a similar method. Use q for inline quotations.
 * @see https://music-encoding.org/guidelines/v5/elements/quote.html
 */
export const QuoteSchema = AnythingObjectSchema; // TODO: implement element

export type QuoteData = v.InferOutput<typeof QuoteSchema>;
