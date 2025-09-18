import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a single line of a postal address.
 * @see https://music-encoding.org/guidelines/v5/elements/addrLine.html
 */
export const AddrLineSchema = AnythingObjectSchema; // TODO: implement element

export type AddrLineData = v.InferOutput<typeof AddrLineSchema>;
