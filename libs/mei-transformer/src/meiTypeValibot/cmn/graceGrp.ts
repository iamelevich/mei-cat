import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Groups grace note elements.
 * @see https://music-encoding.org/guidelines/v5/elements/graceGrp.html
 */
export const GraceGrpSchema = AnythingObjectSchema; // TODO: implement element

export type GraceGrpData = v.InferOutput<typeof GraceGrpSchema>;
