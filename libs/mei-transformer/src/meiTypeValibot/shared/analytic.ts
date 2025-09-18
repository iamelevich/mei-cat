import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains bibliographic information for a single article, essay, or chapter within a larger publication.
 * @see https://music-encoding.org/guidelines/v5/elements/analytic.html
 */
export const AnalyticSchema = AnythingObjectSchema; // TODO: implement element

export type AnalyticData = v.InferOutput<typeof AnalyticSchema>;
