import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates the score definition.
 * @see https://music-encoding.org/guidelines/v5/elements/scoreDef.html
 */
export const ScoreDefSchema = AnythingObjectSchema; // TODO: implement element

export type ScoreDefData = v.InferOutput<typeof ScoreDefSchema>;
