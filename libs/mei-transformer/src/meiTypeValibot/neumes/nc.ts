import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * nc element.
 * @see https://music-encoding.org/guidelines/v5/elements/nc.html
 */
export const NcSchema = AnythingObjectSchema; // TODO: implement element

export type NcData = v.InferOutput<typeof NcSchema>;
