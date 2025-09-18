import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains padding.
 * @see https://music-encoding.org/guidelines/v5/elements/pad.html
 */
export const PadSchema = AnythingObjectSchema; // TODO: implement element

export type PadData = v.InferOutput<typeof PadSchema>;
