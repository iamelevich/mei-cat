import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a family name.
 * @see https://music-encoding.org/guidelines/v5/elements/famName.html
 */
export const FamNameSchema = AnythingObjectSchema; // TODO: implement element

export type FamNameData = v.InferOutput<typeof FamNameSchema>;
