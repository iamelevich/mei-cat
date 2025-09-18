import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a formal statement authorizing the publication of a work, sometimes required to appear on a title page or its verso.
 * @see https://music-encoding.org/guidelines/v5/elements/imprimatur.html
 */
export const ImprimaturSchema = AnythingObjectSchema; // TODO: implement element

export type ImprimaturData = v.InferOutput<typeof ImprimaturSchema>;
