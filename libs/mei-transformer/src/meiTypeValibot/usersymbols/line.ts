import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * line element.
 * @see https://music-encoding.org/guidelines/v5/elements/line.html
 */
export const LineSchema = AnythingObjectSchema; // TODO: implement element

export type LineData = v.InferOutput<typeof LineSchema>;
