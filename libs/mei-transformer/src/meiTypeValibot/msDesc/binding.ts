import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the binding of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/binding.html
 */
export const BindingSchema = AnythingObjectSchema; // TODO: implement element

export type BindingData = v.InferOutput<typeof BindingSchema>;
