import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * instrGrp element.
 * @see https://music-encoding.org/guidelines/v5/elements/instrGrp.html
 */
export const InstrGrpSchema = AnythingObjectSchema; // TODO: implement element

export type InstrGrpData = v.InferOutput<typeof InstrGrpSchema>;
