import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Groups a number of notes together with a tuplet.
 * @see https://music-encoding.org/guidelines/v5/elements/tupletSpan.html
 */
export const TupletSpanSchema = AnythingObjectSchema; // TODO: implement element

export type TupletSpanData = v.InferOutput<typeof TupletSpanSchema>;
