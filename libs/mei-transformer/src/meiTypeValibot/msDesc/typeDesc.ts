import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the type of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/typeDesc.html
 */
export const TypeDescSchema = AnythingObjectSchema; // TODO: implement element

export type TypeDescData = v.InferOutput<typeof TypeDescSchema>;
