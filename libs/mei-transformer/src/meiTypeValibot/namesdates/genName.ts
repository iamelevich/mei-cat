import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a generational name component.
 * @see https://music-encoding.org/guidelines/v5/elements/genName.html
 */
export const GenNameSchema = AnythingObjectSchema; // TODO: implement element

export type GenNameData = v.InferOutput<typeof GenNameSchema>;
