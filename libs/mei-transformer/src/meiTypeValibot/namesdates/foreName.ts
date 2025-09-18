import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a forename.
 * @see https://music-encoding.org/guidelines/v5/elements/foreName.html
 */
export const ForeNameSchema = AnythingObjectSchema; // TODO: implement element

export type ForeNameData = v.InferOutput<typeof ForeNameSchema>;
