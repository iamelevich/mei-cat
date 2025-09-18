import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * ncGrp element.
 * @see https://music-encoding.org/guidelines/v5/elements/ncGrp.html
 */
export const NcGrpSchema = AnythingObjectSchema; // TODO: implement element

export type NcGrpData = v.InferOutput<typeof NcGrpSchema>;
