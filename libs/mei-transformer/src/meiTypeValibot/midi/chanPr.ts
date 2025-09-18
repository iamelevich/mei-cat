import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * chanPr element.
 * @see https://music-encoding.org/guidelines/v5/elements/chanPr.html
 */
export const ChanPrSchema = AnythingObjectSchema; // TODO: implement element

export type ChanPrData = v.InferOutput<typeof ChanPrSchema>;
