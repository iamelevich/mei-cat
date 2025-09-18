import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * stageDir element.
 * @see https://music-encoding.org/guidelines/v5/elements/stageDir.html
 */
export const StageDirSchema = AnythingObjectSchema; // TODO: implement element

export type StageDirData = v.InferOutput<typeof StageDirSchema>;
