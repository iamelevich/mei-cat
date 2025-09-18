import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the support of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/supportDesc.html
 */
export const SupportDescSchema = AnythingObjectSchema; // TODO: implement element

export type SupportDescData = v.InferOutput<typeof SupportDescSchema>;
