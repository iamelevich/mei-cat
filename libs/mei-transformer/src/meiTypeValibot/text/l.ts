import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * A visual line consisting of text. May include text and other inline elements.
 * @see https://music-encoding.org/guidelines/v5/elements/l.html
 */
export const LSchema = AnythingObjectSchema; // TODO: implement element

export type LData = v.InferOutput<typeof LSchema>;
