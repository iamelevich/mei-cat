import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of additional materials.
 * @see https://music-encoding.org/guidelines/v5/elements/accMat.html
 */
export const AccMatSchema = AnythingObjectSchema; // TODO: implement element

export type AccMatData = v.InferOutput<typeof AccMatSchema>;
