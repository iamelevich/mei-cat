import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Symbol placed at the end of a line of music to indicate the first note of the next line.
 * @see https://music-encoding.org/guidelines/v5/elements/custos.html
 */
export const CustosSchema = AnythingObjectSchema; // TODO: implement element

export type CustosData = v.InferOutput<typeof CustosSchema>;
