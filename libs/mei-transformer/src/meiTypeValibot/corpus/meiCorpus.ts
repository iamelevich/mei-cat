import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * meiCorpus element.
 * @see https://music-encoding.org/guidelines/v5/elements/meiCorpus.html
 */
export const MeiCorpusSchema = AnythingObjectSchema; // TODO: implement element

export type MeiCorpusData = v.InferOutput<typeof MeiCorpusSchema>;
