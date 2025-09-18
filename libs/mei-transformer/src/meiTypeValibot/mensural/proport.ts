import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * proport element.
 * @see https://music-encoding.org/guidelines/v5/elements/proport.html
 */
export const ProportSchema = AnythingObjectSchema; // TODO: implement element

export type ProportData = v.InferOutput<typeof ProportSchema>;
