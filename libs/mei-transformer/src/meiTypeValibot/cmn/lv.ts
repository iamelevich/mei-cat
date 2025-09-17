import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a single line of verse.
 * @see https://music-encoding.org/guidelines/v5/elements/lv.html
 */
export const LvSchema = AnythingObjectSchema; // TODO: implement element

export type LvData = v.InferOutput<typeof LvSchema>;
