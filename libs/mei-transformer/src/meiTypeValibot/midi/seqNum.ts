import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * seqNum element.
 * @see https://music-encoding.org/guidelines/v5/elements/seqNum.html
 */
export const SeqNumSchema = AnythingObjectSchema; // TODO: implement element

export type SeqNumData = v.InferOutput<typeof SeqNumSchema>;
