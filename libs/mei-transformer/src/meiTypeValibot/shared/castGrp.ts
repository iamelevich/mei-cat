import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Groups cast items.
 * @see https://music-encoding.org/guidelines/v5/elements/castGrp.html
 */
export const CastGrpSchema = AnythingObjectSchema; // TODO: implement element

export type CastGrpData = v.InferOutput<typeof CastGrpSchema>;
