import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * refrain element.
 * @see https://music-encoding.org/guidelines/v5/elements/refrain.html
 */
export const RefrainSchema = AnythingObjectSchema; // TODO: implement element

export type RefrainData = v.InferOutput<typeof RefrainSchema>;
