import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * chan element.
 * @see https://music-encoding.org/guidelines/v5/elements/chan.html
 */
export const ChanSchema = AnythingObjectSchema; // TODO: implement element

export type ChanData = v.InferOutput<typeof ChanSchema>;
