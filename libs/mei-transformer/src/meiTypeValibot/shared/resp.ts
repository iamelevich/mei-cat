import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a responsibility statement.
 * @see https://music-encoding.org/guidelines/v5/elements/resp.html
 */
export const RespSchema = AnythingObjectSchema; // TODO: implement element

export type RespData = v.InferOutput<typeof RespSchema>;
