import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a quotation, anonymous or attributed, appearing on a title page.
 * @see https://music-encoding.org/guidelines/v5/elements/epigraph.html
 */
export const EpigraphSchema = AnythingObjectSchema; // TODO: implement element

export type EpigraphData = v.InferOutput<typeof EpigraphSchema>;
