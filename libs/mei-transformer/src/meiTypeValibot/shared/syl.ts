import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a single lyric syllable.
 * @see https://music-encoding.org/guidelines/v5/elements/syl.html
 */
export const SylSchema = AnythingObjectSchema;

export type SylData = v.InferOutput<typeof SylSchema>;
