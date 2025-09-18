import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * cc element.
 * @see https://music-encoding.org/guidelines/v5/elements/cc.html
 */
export const CcSchema = AnythingObjectSchema; // TODO: implement element

export type CcData = v.InferOutput<typeof CcSchema>;
