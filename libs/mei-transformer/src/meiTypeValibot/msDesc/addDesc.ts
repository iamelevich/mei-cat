import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of additional materials.
 * @see https://music-encoding.org/guidelines/v5/elements/addDesc.html
 */
export const AddDescSchema = AnythingObjectSchema; // TODO: implement element

export type AddDescData = v.InferOutput<typeof AddDescSchema>;
