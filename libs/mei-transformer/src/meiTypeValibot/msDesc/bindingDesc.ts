import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the binding of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/bindingDesc.html
 */
export const BindingDescSchema = AnythingObjectSchema; // TODO: implement element

export type BindingDescData = v.InferOutput<typeof BindingDescSchema>;
