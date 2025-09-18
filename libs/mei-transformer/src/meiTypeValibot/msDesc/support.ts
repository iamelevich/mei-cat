import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the support of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/support.html
 */
export const SupportSchema = AnythingObjectSchema; // TODO: implement element

export type SupportData = v.InferOutput<typeof SupportSchema>;
