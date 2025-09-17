import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a copyist's mark.
 * @see https://music-encoding.org/guidelines/v5/elements/cpMark.html
 */
export const CpMarkSchema = AnythingObjectSchema; // TODO: implement element

export type CpMarkData = v.InferOutput<typeof CpMarkSchema>;
