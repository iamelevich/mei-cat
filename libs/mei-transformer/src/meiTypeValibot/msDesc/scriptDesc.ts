import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the script of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/scriptDesc.html
 */
export const ScriptDescSchema = AnythingObjectSchema; // TODO: implement element

export type ScriptDescData = v.InferOutput<typeof ScriptDescSchema>;
