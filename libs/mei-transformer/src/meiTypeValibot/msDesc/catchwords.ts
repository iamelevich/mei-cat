import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of catchwords.
 * @see https://music-encoding.org/guidelines/v5/elements/catchwords.html
 */
export const CatchwordsSchema = AnythingObjectSchema; // TODO: implement element

export type CatchwordsData = v.InferOutput<typeof CatchwordsSchema>;
