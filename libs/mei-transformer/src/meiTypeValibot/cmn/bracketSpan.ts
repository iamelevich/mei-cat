import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Groups a number of notes together with a bracket.
 * @see https://music-encoding.org/guidelines/v5/elements/bracketSpan.html
 */
export const BracketSpanSchema = AnythingObjectSchema; // TODO: implement element

export type BracketSpanData = v.InferOutput<typeof BracketSpanSchema>;
