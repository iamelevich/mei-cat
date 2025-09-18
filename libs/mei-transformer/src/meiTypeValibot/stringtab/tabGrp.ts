import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * tabGrp element.
 * @see https://music-encoding.org/guidelines/v5/elements/tabGrp.html
 */
export const TabGrpSchema = AnythingObjectSchema; // TODO: implement element

export type TabGrpData = v.InferOutput<typeof TabGrpSchema>;
